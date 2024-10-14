const charactersContainer = document.getElementById("characters");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const page = document.getElementById("page");

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
  prevButton.disabled = !info.prev;
  nextButton.disabled = !info.next;
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
    page.textContent = currentPage;
    loadCharacters(currentPage);
  }
});

nextButton.addEventListener("click", () => {
  currentPage += 1;
  page.textContent = currentPage;
  loadCharacters(currentPage);
});

loadCharacters(currentPage);
