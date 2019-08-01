function myFunction () {
  var search_box = document.getElementById ("search_box");
  var value = search_box.value;
  console.log ("value is "+value);
  if (value == "cars") {
  window.open("cars2.html");
  }
  if (value == "house") {
  window.open("house.html");
  }
  if (value == "food") {
  window.open("food.html");
  }
  if (value == "general") {
  window.open("generalSavings.html");
  }
  if (value == "reduce") {
  window.open("reduce.html");
  }
  if (value == "reuse") {
  window.open("Reuse.html");
  }
  if (value == "recycle") {
  window.open("recycle.html");
  }
}
