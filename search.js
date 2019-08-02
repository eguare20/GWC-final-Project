
function myFunction () {
  var search_box = document.getElementById ("search_box");
  var value = search_box.value;
  console.log ("value is "+value);
  var isValid = false;
  var cars = ["cars", "gas", "tank", "drive", "driving", "driver", "transportation", "travel"];
  var house = ["house", "home", "room", "heating", "bathroom", "bed", "bedroom", "bathroom"];
  var food = ["food", "meals", "produce", "grocery", "store", "kitchen", "meal", "vegetables", "fruit", "cook", "cooking", "coupons"];
  var general = ["general savings", "general","budget", "overall", "credit"];
  var reduce = ["reduce", "less", "plan", "decrease", "amount", "donate"];
  var reuse = ["reuse", "used", "compost", "donation", "reusable"];
  var recycle = ["recycle", "trash", "recyclable"]
  var climate_change = ["climate change", "climate", "global warming", "environment", "weather", "animals", "wildlife"];

  for (var i = 0; i < cars.length; i++){
    if (value == cars[i]){
      isValid = true;
      window.open ("cars2.html");
    }
  }

  for (var i = 0; i < house.length; i++){
    if (value == house[i]) {
      isValid = true;
      window.open("house.html");
    }
  }

  for (var i = 0; i < food.length; i++){
    if (value == food[i]) {
      isValid = true;
      window.open("food.html");
    }
  }

  for (var i = 0; i < general.length; i++){
    if (value == general[i]) {
      isValid = true;
      window.open("generalSavings.html");
    }
  }

  for (var i = 0; i < reduce.length; i++){
    if (value == reduce[i]) {
      isValid = true;
      window.open("reduce.html");
    }
  }

  for (var i = 0; i < reuse.length; i++){
    if (value == reuse[i]) {
      isValid = true;
      window.open("Reuse.html");
    }
  }

  for (var i = 0; i < recycle.length; i++){
    if (value == recycle[i]) {
      isValid = true;
      window.open("recycle.html");
    }
  }

  for (var i = 0; i < climate_change.length; i++){
    if (value == climate_change[i]) {
      isValid = true;
      window.open("climate_change.html");
    }
  }

  if (isValid == false) {
     alert ("Invalid Search. Please try again!");
  }

}
