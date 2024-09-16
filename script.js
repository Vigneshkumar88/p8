var body = document.getElementById("mei");
var light = document.getElementById("light");
var dark = document.getElementById("dark");
var settings = document.getElementById("dropbtn");

light.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  body.style.color = "black";
});

dark.addEventListener("click", function () {
  body.style.backgroundColor = "#1d2634";
  body.style.color = "#9e9ea4";
});
