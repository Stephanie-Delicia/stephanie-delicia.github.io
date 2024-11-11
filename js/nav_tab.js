// Unactivate active tab, then activate new tab.
function tab_clicked(elem) {
    var activeTab = document.querySelector('.active');
    activeTab.classList.remove("active")
    elem.classList.add("active")
} 