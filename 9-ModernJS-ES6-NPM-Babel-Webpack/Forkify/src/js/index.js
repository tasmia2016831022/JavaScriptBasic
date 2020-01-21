import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";
import Recipe from "./models/Recipe";

/** Global State of the App
 * - Search Object
 * - Current Recipie Object
 * - Shopping List Object
 * - Liked Recipies
 */

const state = {};

/**
 * SEARCH CONTROLLER
 */

const controlSearch = async () => {
  // Get Query from the view
  const query = searchView.getInput();
  //const query = 'pizza';
  console.log(query); //TODO

  if (query) {
    //New Search Object and add to state
    state.search = new Search(query);

    //Prepare UI for Results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
      //Search for recipies
      await state.search.getResults();

      //Render results on UI
      clearLoader();
      searchView.renderResults(state.search.results);
    } catch (error) {
      alert("Error searching recipes!!");
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

// //testing
// window.addEventListener("load", e => {
//     e.preventDefault();
//     controlSearch();
//   });
  

elements.searchResPages.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.results, goToPage);
    console.log(goToPage);
  }
});

/**
 * RECIPE CONTROLLER
 */

//   const recipe = new Recipe('2ea734');
//   recipe.getRecipe();
//   console.log(recipe);

const controlRecipe = async () => {
  //Get id from url
  const id = window.location.hash.replace("#", "");
  console.log(id);

  if (id) {
    //prepare UI for changes

    //create new recipe object
    state.recipe = new Recipe(id);

    // //TESTING
    // window.r = state.recipe;

    try {
      //Get recipe data
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      //Calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      //Render recipe
      console.log(state.recipe);
    } catch (error) {
      alert("Error in processing recipe!!");
    }
  }
};
["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controlRecipe)
);
