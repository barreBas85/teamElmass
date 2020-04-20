/*
 *Deze functie laat een verborgen bericht zien als je op de knop klikt. 
 *De tekst wordt weergegeven in de paragraph (p) met het id "srct".
 */

function secretMessage() {
  document.getElementById("scrt").innerHTML = "U heeft het geheime bericht gevonden! Ga naar de pagina van Elmass om het geheim te ontdekken!";
}




/*
 * Deze functie heeft een parameter (names) die wordt gereturned 
 * samen met de objecten in de array.
 */

var info = {
  name1: "Elmass",
  name2: "Ayoub",
  name3: "Kaan",
  name4: "Reguille"
  };


function givenInfo(names) {
  console.log(names);

  return('Hey, wij zijn ' + names.name1 + ", " + names.name2 + ', ' + names.name3 + ' & ' + names.name4 + " en welkom op onze website!");
};

alert(givenInfo(info));




function showIMG() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "images/corona.png");
  x.setAttribute("alt", "Stay Safe!");
  document.body.appendChild(x);
};