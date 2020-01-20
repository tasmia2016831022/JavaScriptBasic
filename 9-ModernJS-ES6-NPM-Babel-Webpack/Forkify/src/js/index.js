import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';

/** Global State of the App
 * - Search Object
 * - Current Recipie Object
 * - Shopping List Object
 * - Liked Recipies
 */

 const state = {};

 const controlSearch = async () =>{
     // Get Query from the view
     const query = searchView.getInput();
     console.log(query); //TODO

     if(query){
         //New Search Object and add to state
         state.search = new Search(query);

         //Prepare UI for Results 
         searchView.clearInput();
         searchView.clearResults();
         renderLoader(elements.searchRes);

         //Search for recipies
         await state.search.getResults();

         //Render results on UI
         clearLoader();
         searchView.renderResults(state.search.results);

     }
 }

 elements.searchForm.addEventListener('submit', e=>{
     e.preventDefault();
     controlSearch();
 });

