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
function printSize(num){

}
function submit(num){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    $("#print").text("$" + (num*5));
  });
}


$(function(){
  plusMinus();
});
