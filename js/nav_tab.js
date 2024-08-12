// Unactivate active tab, then activate new tab.
function tab_clicked(elem) {
    var activeTab = document.querySelector('.active');
    activeTab.classList.remove("active")
    elem.classList.add("active")
} 

// Just notes for my own reference:
// console.log("id: " + elem.id.toString()) // print selected tab id
// console.log("active tab: " + activeTab.id.toString()) // print active tab id (there should only be one at a time!)