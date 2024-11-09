function drawingClicked() {
}
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    var imageNames = ['drawing1', 'drawing2', "drawing3", 'drawing4', 
        'drawing5', 'drawing6', "drawing7", 'drawing8',
        'drawing9', 'drawing10', "drawing11", 'drawing12']
        var elem = event.target;
    if (imageNames.includes(event.target.id)) {
        var slideElem = document.getElementById(elem.id + "S");
        slideElem.style.display = "flex";
    } else if (imageNames.includes("drawing" + event.target.id)) {
        var slideElem = document.getElementById("drawing" + elem.id + "S");
        slideElem.style.display = "none";
    }
  }