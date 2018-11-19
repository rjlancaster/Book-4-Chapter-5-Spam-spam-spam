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


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let capitalPlanets = planets.map(planet => {
  let upper = planet.charAt(0).toUpperCase() + planet.slice(1)
  return upper
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let planetContainsE = planets.filter(planet => {
  let yes = planet.includes("e")
  return yes
})

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const totalWords = words.reduce(
  (currentWord, next) => `${currentWord} ${next}`
)