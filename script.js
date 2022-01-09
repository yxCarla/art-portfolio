function openNav() {
    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }

function closeNav() {
  var links = document.getElementById("myLinks");
    if (links.style.display === "none") {
      links.style.display = "block";
    } else {
      links.style.display = "none";
    }
}

function checkNav() {
  var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      closeNav();
      //links.style.textDecoration = "none";
    } else {
      links.style.display = "none";
    }
}

