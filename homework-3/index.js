const rootList = document.querySelector("#root-list");
const prevBtn = document.querySelector("#prev");
const currentPage = document.querySelector("#current");
const nextBtn = document.querySelector("#next");

let page = 0;

prevBtn.addEventListener("click", () => {
  if (page === 0) {
    prevBtn.disabled = true;
  }

  page -= 1;
  currentPage.textContent = page;
});
nextBtn.addEventListener("click", () => {
  page += 1;
  currentPage.textContent = page + 1;
});

const BASE_URL = "https://rickandmortyapi.com/api/character";

const fetchResponse = fetch(BASE_URL).then((response) => response.json());

const data = fetchResponse
  .then((data) => {
    const info = data.info;
    const results = data.results;

    console.log(info);

    return results.map((item) => {
      const li = document.createElement("li");
      li.textContent = item.name;
      rootList.appendChild(li);
    });
  })
  .catch((err) => console.log(err));
