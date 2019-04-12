function Pizza(){
  this.orders = [];
  this.currentId = 0;
};
Pizza.prototype.addPizza = function(order){
  order.id = this.assignId();
  this.orders.push(order);
};
Pizza.prototype.assignId = function(){
  this.currentId++;
  return this.currentId;
};

function Order(size, topName, totalPrice){
  this.size = size,
  this.topName = topName,
  this.totalPrice = totalPrice;
};

Order.prototype.fullOrder = function(){
  return this.size + " with " + this.topName + ": $" + this.totalPrice
};
function printOrder(printPizza){
  var pizzaList = $("#show-pizza");
  var pizzaHtml = "";
  printPizza.orders.forEach(function(order){
    pizzaHtml += "<p id =" + order.id +">" + order.size + " " + order.topName + " " + order.totalPrice;
  });
pizzaList.html(pizzaHtml);
};


function plusMinus(order){
  var num = 0;
  var pSize = "Small";
  $("#size").text("Small");
  $("#sizePlus").on("click", function() {

    if(num < 3 && num >= 0){
      num++;
      if(num === 0){
        $("#size").text(" Small ");
        pSize = "Small"
      }else if(num === 1){
        $("#size").text(" Medium");
        pSize = "Medium";
      }else if(num === 2){
        $("#size").text(" Large ");
        pSize = "Large"
      }else if(num === 3){
        $("#size").text("X-Large");
        pSize = "X-Large"
      };
    };
  });
  $("#sizeMinus").on("click", function() {

    if(num <= 3 && num > 0){
      num--;
      if(num === 0){
        $("#size").text(" Small ");
        pSize = "Small"
      }else if(num === 1){
        $("#size").text(" Medium");
        pSize = "Medium";
      }else if(num === 2){
        $("#size").text(" Large ");
        pSize = "Large"
      }else if(num === 3){
        $("#size").text("X-Large");
        pSize = "X-Large"
      };
    };
  });
  $("#saveBtn").on("click", function() {
    this.size = pSize;
  });
};
//pep mush olive bell onion saus anch pine ham
function plusMinusToppings(order){
  var num = 0;
  var topList = "";
  $("#size").text(num);
  $("#sizePlus").on("click", function() {

    if(num < 3 && num >= 0){
      num++;
      if(num === 0){
        $("#size").text(num);
        pSize = "Small"
      }else if(num === 1){
        $("#size").text(num);
        pSize = "Medium";
      }else if(num === 2){
        $("#size").text(num);
        pSize = "Large"
      }else if(num === 3){
        $("#size").text(num);
        pSize = "X-Large"
      };
    };
  });
  $("#sizeMinus").on("click", function() {

    if(num <= 3 && num > 0){
      num--;
      if(num === 0){
        $("#size").text(num);
        pSize = "Small"
      }else if(num === 1){
        $("#size").text(num);
        pSize = "Medium";
      }else if(num === 2){
        $("#size").text(num);
        pSize = "Large"
      }else if(num === 3){
        $("#size").text(num);
        pSize = "X-Large"
      };
    };
  });
  $("#saveBtn").on("click", function() {
    this.size = pSize;
  });
};

var pizza = new Pizza();
$(function(){
  var newOrder = new Order("", "", 0);
  pizza.addPizza(newOrder);
  plusMinus(newOrder);
  $("#saveBtn").on("click", function() {
    console.log(this.size);
    newOrder.size = this.size;
  });
  $("#btnSubmit").on("click", function(event){
      printOrder(pizza);
      event.preventDefault();
  });


});
