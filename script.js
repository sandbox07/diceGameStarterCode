$(document).ready(function(){
 $("#roll-dice").click(rollDice());
  function rolldice(){
  var dice1 = Math.floor((Math.random()*6) +1);
  var dice2 = Math.floor((Math.random()*6) +1);
  switch(dice1){
    case 1: $("#first").attr("src", "images/1");
    case 2: $("#first").attr("src", "images/2");
    case 3: $("#first").attr("src", "images/3");
    case 4: $("#first").attr("src", "images/4");
    case 5: $("#first").attr("src", "images/5");
    case 6: $("#first").attr("src", "images/6");
  }
  switch(dice2){
    case 1: $("#second").attr("src", "images/1");
    case 2: $("#second").attr("src", "images/2");
    case 3: $("#second").attr("src", "images/3");
    case 4: $("#second").attr("src", "images/4");
    case 5: $("#second").attr("src", "images/5");
    case 6: $("#second").attr("src", "images/6");
  }
  };
});