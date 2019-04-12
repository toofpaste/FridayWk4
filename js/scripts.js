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


function plusMinus(){
  var num = 0;
  $("#size").text("Small");
  $("#sizePlus").click(function() {
    if(num < 3 && num >= 0){
      num++;
      if(num === 0){
        $("#size").text(" Small ");
      }else if(num === 1){
        $("#size").text(" Medium");
      }else if(num === 2){
        $("#size").text(" Large ");
      }else if(num === 3){
        $("#size").text("X-Large");
      };
      console.log("+" + num);
      submit(num);
    };
  });
  $("#sizeMinus").click(function() {
    if(num <= 3 && num > 0){
      num--;
      if(num === 0){
        $("#size").text("Small");
      }else if(num === 1){
        $("#size").text("Medium");
      }else if(num === 2){
        $("#size").text("Large");
      }else if(num === 3){
        $("#size").text("X-Large");
      };
      console.log("-:" + num);
      submit(num);
    };
  });
};

function submit(num){
  $("form#formOne").submit(function(event){
    event.preventDefault();
  });
}

var pizza = new Pizza();
$(function(){
  plusMinus();
  var newOrder = new Order("Large", "Pepperoni", 35);
  pizza.addPizza(newOrder);
  printOrder(pizza);
});
