const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

let planetList = ""
planets.forEach(planet => {
  planetList += `<p>Hello planet ${planet}!</p>`
})
const planetEl = document.getElementById("planets")
planetEl.innerHTML = planetList

