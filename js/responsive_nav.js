/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsive_bar() {
  var x = document.getElementById("homeNav");
  if (x.className === "topnav") {
    x.className += " responsive";
    tabs = Array.from(document.querySelectorAll('tab'));
    console.log("All tabs: " + tabs);
    console.log("tabs length: " + tabs.length);
    console.log(tabs);
    for (var i = 0; i < tabs.length; ++i) {
      var item = document.getElementById(tabs[i].id);  
      console.log("Tab id: " + item.id);
      y = window.scrollY + item.getBoundingClientRect().top; // Y
      x = window.scrollX + item.getBoundingClientRect().left;
      console.log("posn: " + x + ", " + y);
      console.log("Tab display: " + document.defaultView.getComputedStyle(item).display);
      console.log("Tab color: " + document.defaultView.getComputedStyle(item).color);
  }
  } else {
    x.className = "topnav";
    tabs = Array.from(document.querySelectorAll('tab'));
    console.log("All tabs: " + tabs);
    console.log("tabs length: " + tabs.length);
    console.log(tabs);
    for (var i = 0; i < tabs.length; ++i) {
      var item = tabs[i];  
      // console.log("Tab id: " + item.id);
      // console.log("Tab color: " + item.style.color);
      // console.log("Tab display: " + document.defaultView.getComputedStyle(item).display);
    }
  }
} 