import Search from "./models/Search";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import * as listView from "./views/listView";
import * as likesView from "./views/likesView";
import List from "./models/List";
import { elements, renderLoader, clearLoader } from "./views/base";
import Recipe from "./models/Recipe";
import Likes from "./models/Likes";

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

  if (id) {
    //prepare UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    //Highlight selected search item
    if (state.search) searchView.highlightSelected(id);

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
      clearLoader();
      recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
    } catch (error) {
      console.log(error);
      alert("Error in processing recipe!!");
    }
  }
};
["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controlRecipe)
);

/**
 * LIST CONTROLLER
 */

const controlList = () => {
  //Create a new list if empty
  if (!state.list) {
    state.list = new List();
  }

  //Add ingredients each to the list and UI
  listView.clearShoppingList();
  state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
};

//Handle delete and update list item events
elements.shopping.addEventListener("click", e => {
  const id = e.target.closest(".shopping__item").dataset.itemid;

  //Handle Delete button
  if (e.target.matches(".shopping__delete, .shopping__delete *")) {
    //delete from state
    state.list.deleteItem(id);

    //delete from UI
    listView.deleteItem(id);
  } else if (e.target.matches(".shopping__count-value")) {
    //Handle count update
    const val = parseFloat(e.target.value, 10);
    state.list.updateCount(id, val);
  }
});

/*
 * LIKE CONTROLLER
 */

const controlLike = () => {
  if (!state.likes) {
    state.likes = new Likes();
  }
  const currentID = state.recipe.id;

  //User has NOT yet liked current recipe
  if (!state.likes.isLiked(currentID)) {
    // Add like to the state
    const newLike = state.likes.addLike(
      currentID,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );
    //Toggle Like button
    likesView.toggleLikeBtn(true);

    //Add Like to the UI list
    likesView.renderLike(newLike);

    // user has liked current recipe
  } else {
    //Remove like fom the state
    state.likes.deleteLike(currentID);

    //Toggole Like button
    likesView.toggleLikeBtn(false);

    //Remove Like button from the list
    likesView.deleteLike(currentID);
  }
  likesView.toggleLikeMenu(state.likes.getNumLikes());
};

//Restore Liked recipes on page Load
window.addEventListener("load", () => {
  state.likes = new Likes();

  //Restore Likes
  state.likes.readStorage();

  //Toggole like menu button
  likesView.toggleLikeMenu(state.likes.getNumLikes());

  //Render existing likes
  state.likes.likes.forEach(like => likesView.renderLike(like));
});

//Handling recipe button clicks
elements.recipe.addEventListener("click", e => {
  if (e.target.matches(".btn-decrease, .btn-decrease *")) {
    //Dec btn is clicked
    if (state.recipe.servings > 1) {
      state.recipe.updateServings("dec");
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches(".btn-increase, .btn-increase *")) {
    //Inc btn is clicked
    state.recipe.updateServings("inc");
    recipeView.updateServingsIngredients(state.recipe);
  } else if (e.target.matches(".recipe__btn--add, .recipe__btn--add *")) {
    //add ingredients to shopping list
    controlList();
  } else if (e.target.matches(".recipe__love, .recipe__love *")) {
    // Like controller
    controlLike();
  }
});

