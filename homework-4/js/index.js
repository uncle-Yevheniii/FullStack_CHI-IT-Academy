import { allFetchCharacters, currentFetchCharacter } from "./api.js";

const CHARACTERS_LIST = document.querySelector("#characters-list");
const MODAL_WRAPPER = document.querySelector("[data-modal]");

const BASE_URL = "https://rickandmortyapi.com/api/character";

let nextPage = null;
let isLoading = false;

async function displayCharacters(url) {
  try {
    if (isLoading) return;
    isLoading = true;

    const { info, results } = await allFetchCharacters(url);
    CHARACTERS_LIST.innerHTML += results.map(renderCharacters).join("");

    nextPage = info.next;
    isLoading = false;
  } catch (err) {
    CHARACTERS_LIST.innerHTML = "Something went wrong!";
    isLoading = false;
  }
}

// EventListeners
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
    nextPage
  ) {
    displayCharacters(nextPage);
  }
});

CHARACTERS_LIST.addEventListener("click", async (e) => {
  const characterWrapper = e.target.closest(".character-wrapper");
  if (!characterWrapper) return;

  const id = characterWrapper.id;
  const res = await currentFetchCharacter(BASE_URL, id);

  MODAL_WRAPPER.innerHTML = openModalCharacter(res);
});

MODAL_WRAPPER.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-close-modal")) {
    MODAL_WRAPPER.innerHTML = "";
    MODAL_WRAPPER.classList.remove("open");
  }
});

// renders
function renderCharacters(item) {
  return `
    <div class='character-wrapper' id=${item.id} >
      <img src=${item.image} alt=${item.name} />
      <h3>${item.name}</h3>
    </div>
  `;
}
function openModalCharacter(item) {
  MODAL_WRAPPER.classList.add("open");
  return `
    <div class="modal-overlay" data-close-modal></div>
    <div class="modal-wrapper">
      <button class="close-modal-btn" data-close-modal tabindex="0">Close modal window</button>
      <img src="${item.image}" alt="${item.name}" />
      <h4>${item.name}</h4>

      <div class='character-info'>
        <span>Gender: ${item.gender}</span>
        <span>Species: ${item.species}</span>
        <span>Status: ${item.status}</span>
      </div>
    </div>
  `;
}

displayCharacters(BASE_URL);
