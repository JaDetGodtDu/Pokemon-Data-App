"use strict";

console.log("Javascript is running");

window.addEventListener("load", initApp);

async function initApp() {
  console.log("initApp");
  const pokemonPlural = await fetchJSON(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );
  pokemonPlural.forEach(showPokemon);
}

async function fetchJSON(url) {
  console.log("JSON being fetched");
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showPokemon(pokemon) {
  console.log("showPokemon");

  let myHTML = /*HTML*/ `
  <article >
        <img src=${pokemon.image}>
        <p><b>Name:</b> ${pokemon.name}</p>
        <p><b>Index:</b> ${pokemon.dexindex}</p>
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
