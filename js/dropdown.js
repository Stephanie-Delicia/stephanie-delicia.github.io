function dropDownClicked() {
}
  // Opens dropdown for image transformation examples
  // TODO: maybe a class diagram addition
  window.onclick = function(event) {
    if (event.target == document.getElementById('dropdown-btn')) {
      console.log("first button clicked");
      var dropdown = document.getElementById("dropdown1");
      if (dropdown.classList.contains('show')) {
        document.getElementById("dropdown-img-examples").style.display = 'none';
        document.getElementById("dropdown-btn").style.borderBottom = '0px solid transparent';
        document.getElementById("dropdown-btn").style.borderTop = '10px solid #154a56';
      } else {
        document.getElementById("dropdown-img-examples").style.display = 'inline-block';
        document.getElementById("dropdown-btn").style.borderTop = '0px solid transparent';
        document.getElementById("dropdown-btn").style.borderBottom = '10px solid #154a56';
      }
      document.getElementById("dropdown1").classList.toggle("show");
    } else if (event.target == document.getElementById('dropdown-btn2')) { // second button
        console.log("second button clicked");
        var dropdown = document.getElementById("dropdown2");
        if (dropdown.classList.contains('show2')) {
          document.getElementById("dropdown-class-diagram").style.display = 'none';
        } else {
          document.getElementById("dropdown-class-diagram").style.display = 'inline-block';
        }
        document.getElementById("dropdown2").classList.toggle("show2");
    }
  }