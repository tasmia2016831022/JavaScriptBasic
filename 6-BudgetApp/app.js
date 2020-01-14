//Budget Controller
var budgetController = (function() {})();

//UIController
var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    return{
        getInput:function(){
            return{
                type: document.querySelector(DOMStrings.inputType).value,// will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        getDOMStrings: function(){
            return DOMStrings;
        }
    };

})();

//Global App Controller
var controller = (function(budgetCtrl, UIctrl) {
  
  var DOM = UIctrl.getDOMStrings();  
  var ctrlAddItem = function() {

    /// get the field input data
    var input = UIctrl.getInput();
    console.log(input);

    /// add the item to budget controller
    ///add the item to ui
    ///calculate the budget
    ///display the budget to the ui

    //console.log('this works');
  };

  document.querySelector(DOM.inputButton).addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      //console.log('Enter pressed');
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
