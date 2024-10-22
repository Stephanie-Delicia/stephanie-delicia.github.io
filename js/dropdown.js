function dropDownClicked() {
    document.getElementById("dropdown1").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdown = document.getElementById("dropdown1");
      if (dropdown.classList.contains('show')) {
        document.getElementById("dropdown-img-examples").style.display = 'none';
      } else {
        document.getElementById("dropdown-img-examples").style.display = 'inline-block';
      }
    }
  }