/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsive_bar() {
  var x = document.getElementById("homeNav");
  if (x.className === "homeNav") {
    x.className += " responsive";
  } else {
    x.className = "homeNav";
  }
} 