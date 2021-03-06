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

function Order(size, topName, totalPrice, target){
  this.size = size,
  this.topName = topName,
  this.totalPrice = totalPrice;
  this.target = target;
};

function printOrder(printPizza){
  var pizzaList = $("#show-pizza");
  var pizzaHtml = "";
    var nameArr = ["Pepperoni", "Mushroom", "Olive", "Bell Pepper", "Onion", "Sausage", "Anchovie", "Pineapple", "Ham"];
    var count = 0;

  printPizza.orders.forEach(function(order){
    for(var i = 0; i < nameArr.length; i++){
      if(order.topName.includes(nameArr[i])){
        count++;
      };
    };
    if(count > 0){
    pizzaHtml += "<p id =" + order.id +">" + order.size + " Cheese pizza with: <br>" + order.topName + "<br> Your total is: $<span id = 'costA'>" + order.totalPrice + "</span></p>";
    }else {
      pizzaHtml += "<p id =" + order.id +">" + order.size + " Cheese pizza with: No Toppings" + "<br> Your total is: $<span id = 'costA'>" + order.totalPrice + "</span></p>";
    };
  });
pizzaList.html(pizzaHtml);
};


function plusMinus(order){
  var num = 0;
  var pSize = "Small";
  $("#size0").text("Small");
  $("#Plus0").on("click", function() {

    if(num < 3 && num >= 0){
      num++;
      if(num === 0){
        $("#size0").text(" Small ");
        pSize = "Small"
      }else if(num === 1){
        $("#size0").text(" Medium");
        pSize = "Medium";
      }else if(num === 2){
        $("#size0").text(" Large ");
        pSize = "Large"
      }else if(num === 3){
        $("#size0").text("X-Large");
        pSize = "X-Large"
      };
    };
  });
  $("#Minus0").on("click", function() {

    if(num <= 3 && num > 0){
      num--;
      if(num === 0){
        $("#size0").text(" Small ");
        pSize = "Small"
      }else if(num === 1){
        $("#size0").text(" Medium");
        pSize = "Medium";
      }else if(num === 2){
        $("#size0").text(" Large ");
        pSize = "Large"
      }else if(num === 3){
        $("#size0").text("X-Large");
        pSize = "X-Large"
      };
    };
  });
  $("#save0").on("click", function() {
    this.size = pSize;
    if(pSize === "Small"){
      order.totalPrice = 10;
    }else if(pSize === "Medium"){
      order.totalPrice = 15;
    }else if(pSize === "Large"){
      order.totalPrice = 20;
    }else if(pSize === "X-Large"){
      order.totalPrice = 500;
    };
  });
};
//pep mush olive bell onion saus anch pine ham
function plusMinusToppings(order){
  var num = 0;
  var nameArr = ["Pepperoni", "Mushroom", "Olive", "Bell Pepper", "Onion", "Sausage", "Anchovie", "Pineapple", "Ham"];
  var topList = "";
  $("#size" + order.target).text(num);
  $("#Plus" + order.target).on("click", function() {
      $("#li" + order.target).append("<li><img id = 'lis" + num + "'src = 'img/img"+order.target+".png' alt = 'food'></li>");
      num++;
      $("#size" + order.target).text(num);

  });
  $("#Minus" + order.target).on("click", function() {
    if(num > 0){
      num--;
      $("#size" + order.target).text(num);
      $("#lis" + num).remove();
    };
  });
  $("#save" + order.target).on("click", function() {
    if(num != 0){
      order.topName += num + "x: " + nameArr[order.target - 1] + "<br>";
      order.totalPrice += num*10;
    };

  });
};
function orderOp(newOrder){
  $("#save" + newOrder.target).click(function() {
    newOrder.target += 1;
    $("#save" + (newOrder.target - 1)).hide();
    $("#Minus" +(newOrder.target - 1)).hide();
    $("#Plus" + (newOrder.target - 1)).hide();
    $("#cont" + newOrder.target).show();
    plusMinusToppings(newOrder);
    if(newOrder.target <= 10){
    orderOp(newOrder);
  };
  });
};

var pizza = new Pizza();
$(function(){
  var newOrder = new Order(" ", " ", 0, 0);
  var count = 0;
  pizza.addPizza(newOrder);
  plusMinus(newOrder);
  orderOp(newOrder);
  $("#save0").click(function(){
    $("#btnSubmit").show();
    newOrder.size = this.size;
  });

  $("#btnSubmit").on("click", function(event){
      printOrder(pizza);
      event.preventDefault();
  });



});
