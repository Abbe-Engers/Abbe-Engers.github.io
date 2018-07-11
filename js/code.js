var scroller = 1;
var changeStylenum = false;
var html = document.getElementById("html");
var kaartanker = document.getElementById("kaart");
var introtekst = document.getElementById("introtekst");
var welkom = document.getElementById("welkom");
var verderButton = document.getElementById("verderButton");
var Abbe = document.getElementById("opAbbe");
var image = document.getElementById("image");
var Badge = document.getElementById("bekijkBadge");
var programTekst = document.getElementById("programming");
var hobbyTekst = document.getElementById("hobby");
var projectTekst = document.getElementById("project");
var badgesList = document.getElementById("badgesList");
var terug = document.getElementById("terugButton");

function Verder() {
  scroller = 2;
  console.log("scroller = 2;");
}

function Badges() {
  scroller = 3;
  console.log("scroller = 3;");
}

function check() {
  if (scroller == 2) {
    window.open('#kaart', '_self')
    scroller = 1;
  }

  if (scroller == 3) {
    window.open('#kaart-2', '_self')
    scroller = 1;
  }
}

function changeStyle() {
  if (changeStylenum == true) {
    changeStylenum = false;
    // terug naar het oude
    console.log("verander naar oude");
    html.style.background = "#e2e1e0";
    kaartanker.style.color = "#e2e1e0";
    introtekst.style.color = "black";
    welkom.style.color = "black";
    verderButton.style.background = "#e2e1e0";
    Badge.style.background = "#e2e1e0";
    terugButton.style.background = "#e2e1e0";
    Abbe.style.color = "#808080";
    image.src = "moon sun.png";
    programTekst.style.color = "#808080";
    hobbyTekst.style.color = "#808080";
    projectTekst.style.color = "#808080";
    badgesList.style.color = black;
  }

  else if (changeStylenum == false) {
    changeStylenum = true;
    //verander css
    console.log("verander naar dark");
    html.style.background = "#212121";
    kaartanker.style.color = "#212121";
    introtekst.style.color = "white";
    welkom.style.color = "white";
    verderButton.style.background = "#212121";
    Badge.style.background = "#212121";
    terugButton.style.background = "#212121";
    Abbe.style.color = "#ff4545";
    image.src = "moon sun - red.png";
    programTekst.style.color = "#ff4545";
    hobbyTekst.style.color = "#ff4545";
    projectTekst.style.color = "#ff4545";
    badgesList.style.background = "#ff4545";
  }
}







setInterval(check, 10);
