//Budget Controller
var budgetController = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      //Create a new Id
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      //Create new item based on type inc or exp
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if(type === 'inc'){
        newItem = new Income(ID, des, val);
      }

      //Push it into data structure
      data.allItems[type].push(newItem);

      //return new Item
      return newItem;
    },
    
  };
})();

//UIController
var UIController = (function() {
  var DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list'
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },

    addListItems: function(obj, type){

        var html,newHtml,element;

        ///Create HTML string with placeholder text

        if(type==='inc'){
            element = DOMStrings.incomeContainer;
            html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }else if(type==='exp'){
            element = DOMStrings.expenseContainer;
            html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }

        ///Replace the placeholder text with actual data
        newHtml = html.replace('%id%',obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%',obj.value);

        ///Insert the HTML into the DOM
        document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
        
    },

    clearFields: function(){
        var fields,fieldsArray;
        fields = document.querySelectorAll(DOMStrings.inputDescription+ ',' + DOMStrings.inputValue);
        fieldsArray = Array.prototype.slice.call(fields);

        fieldsArray.forEach(function(current, index, array){

            current.value = "";

        });
        fieldsArray[0].focus();
    },

    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

//Global App Controller
var controller = (function(budgetCtrl, UIctrl) {
  var setUpEventListeners = function() {
    var DOM = UIctrl.getDOMStrings();
    document
      .querySelector(DOM.inputButton)
      .addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var updateBudget = function(){

  };

  var ctrlAddItem = function() {
    /// get the field input data
    var input = UIctrl.getInput();

    /// add the item to budget controller
    var newItem = budgetCtrl.addItem(
      input.type,
      input.description,
      input.value
    );

    ///add the item to ui
    UIctrl.addListItems(newItem,input.type);

    ///clear the fields
    UIctrl.clearFields();

    ///calculate the budget
    ///display the budget to the ui

    //console.log('this works');
  };

  return {
    init: function() {
      console.log("Application has started");
      setUpEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
