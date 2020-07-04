/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function handleClicked() {
    var elem = document.getElementById("myTopnav");
    if (elem.className === "topnav") {
      elem.className += " responsive";
    } else {
      elem.className = "topnav";
    }
  }