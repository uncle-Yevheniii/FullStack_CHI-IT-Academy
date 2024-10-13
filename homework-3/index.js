const charactersContainer = document.getElementById("characters");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentPage = 1;

function fetchCharacters(page = 1) {
  const data = fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  ).then((res) => res.json());

  return data;
}

function displayCharacters(characters) {
  charactersContainer.innerHTML = "";
  characters.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card");
    characterCard.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <h3>${character.name}</h3>
          <p>Status: ${character.status}</p>
          <p>Species: ${character.species}</p>
        `;
    charactersContainer.appendChild(characterCard);
  });
}

function updatePagination(info) {
  if (info.prev) {
    prevButton.disabled = false;
  } else {
    prevButton.disabled = true;
  }

  if (info.next) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }
}

function loadCharacters(page = 1) {
  fetchCharacters(page).then((data) => {
    if (data) {
      displayCharacters(data.results);
      updatePagination(data.info);
    }
  });
}

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    loadCharacters(currentPage);
  }
});

nextButton.addEventListener("click", () => {
  currentPage += 1;
  loadCharacters(currentPage);
});

loadCharacters(currentPage);
