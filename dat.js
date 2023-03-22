"use strict";

console.log("Javascript is running");

window.addEventListener("load", initApp);

function initApp() {}

function fetchJSON() {}

function showPokemon() {}

const porygon = {
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png",
  name: "Porygon",
  description:
    "State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.",
  dexindex: 137 /* ??? */,
  type: "Normal",
  gender: "Unknown",
  weight: 36514 /* In grams obv */,
  height: 78.7 /* In cm obv */,
  generation: 1,
  canEvolve: true,
  statsHP: 65,
  statsAttack: 60,
  statsDefence: 70,
  statsSpecialAttack: 85,
  statsSpecialDefence: 75,
  statsSpeed: 40,
  footprint: "" /* If it exists */,
  subtype: "",
  spilversion: "" /* ??? */,
};
function viewPokemon(pokemon) {
  const myHTML = /*html*/ `
        <img src=${pokemon.image}>
        <dialog open>
        <li><b>Name:</b> ${pokemon.name}</li>
        <li><b>Description:</b> ${pokemon.description}</li>
        <li><b>Pokédex index:</b> ${pokemon.dexindex}</li>
        <li><b>Type:</b> ${pokemon.type}</li>
        <li><b>Gender:</b> ${pokemon.gender}</li>
        <li><b>Weight:</b> ${pokemon.weight}</li>
        <li><b>Height:</b> ${pokemon.height}</li>
        <li><b>Generation:</b> ${pokemon.generation}</li>
        <li><b>Can evolve:</b> ${pokemon.canEvolve}</li>
        <li><b>HP:</b> ${pokemon.statsHP}</li>
        <li><b>Attack:</b> ${pokemon.statsAttack}</li>
        <li><b>Defence:</b> ${pokemon.statsDefence}</li>
        <li><b>Special Attack:</b> ${pokemon.statsSpecialAttack}</li>
        <li><b>Special Defence:</b> ${pokemon.statsSpecialDefence}</li>
        <li><b>Speed:</b> ${pokemon.statsSpeed}</li>
        </dialog>
    `;

  document
    .querySelector("#pokemonDetailView")
    .insertAdjacentHTML("beforeend", myHTML);
}
viewPokemon(porygon);
