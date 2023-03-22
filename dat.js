"use strict";

console.log("Javascript is running");

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

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp");
  showPokemon(porygon);
}

function fetchJSON() {}

function showPokemon(pokemon) {
  console.log("showPokemon");

  let myHTML = /*HTML*/ `
  <article>
    <tbody>
      <tr>
        <td><img src=${pokemon.image}></td><br>
        <td><b>Name:</b> ${pokemon.name}</td><br>
        <td><b>Pokédex index:</b> ${pokemon.dexindex}</td>
      </tr>
    </tbody>
  </article>   
`;

  document
    .querySelector("#pokemon-view")
    .insertAdjacentHTML("beforeend", myHTML);
  document
    .querySelector("#pokemon-view article:last-child")
    .addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    console.log("pokemonClicked");
    console.log(pokemon);

    let pokemonInfo = /*html*/ ` 
    <article id=pokemon-info-list>
        <img src=${pokemon.image}>
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
        <button id="detail-view-btn">Close</button>
     </article>   
    `;

    document
      .querySelector("#pokemon-detail-view")
      .insertAdjacentHTML("beforeend", pokemonInfo);

    document.querySelector("#pokemon-detail-view").showModal(pokemon);
    document
      .querySelector("#detail-view-btn")
      .addEventListener("click", closeDialog);
  }
}
function closeDialog() {
  console.log("closeDialog");
  document.querySelector("#pokemon-detail-view").close();
  document.querySelector("#pokemon-info-list").remove();
}
