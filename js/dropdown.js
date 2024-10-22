function dropDownClicked() {
    document.getElementById("dropdown1").classList.toggle("show");
    document.getElementById("dropdown2").classList.toggle("show2");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (event.target == document.getElementById('dropdown-btn')) {
      console.log("first button clicked");
      var dropdown = document.getElementById("dropdown1");
      if (dropdown.classList.contains('show')) {
        document.getElementById("dropdown-img-examples").style.display = 'none';
      } else {
        document.getElementById("dropdown-img-examples").style.display = 'inline-block';
      }
    } else if (event.target == document.getElementById('dropdown-btn2')) { // second button
        console.log("second button clicked");
        var dropdown = document.getElementById("dropdown2");
        if (dropdown.classList.contains('show2')) {
          document.getElementById("dropdown-class-diagram").style.display = 'none';
        } else {
          document.getElementById("dropdown-class-diagram").style.display = 'inline-block';
        }
    }

  }