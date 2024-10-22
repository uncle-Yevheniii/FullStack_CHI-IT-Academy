import { useState, useEffect } from "react";

import * as style from "./App.module.css";

export default function App() {
  const allFetchCharacters = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Something went wrong!");

    return res.json();
  };
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [dataCharacter, setDataCharacter] = useState([]);
  const [infoCharacter, setInfoCharacter] = useState({});

  const handlePrev = () => setUrl(infoCharacter.prev);
  const handleNext = () => setUrl(infoCharacter.next);
  const currentPage = () =>
    `Page: ${
      infoCharacter.next
        ? infoCharacter.next.split("=")[1] - 1
        : infoCharacter.pages
    }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setErrorMsg(false);
        const res = await allFetchCharacters(url);
        setDataCharacter(res.results);
        setInfoCharacter(res.info);
      } catch (error) {
        setErrorMsg(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return (
    <>
      {errorMsg && <b>Something went wrong!</b>}
      {loading && <b>Loading...</b>}

      <h1 className={style.title}>Rick and Morty Characters</h1>

      <ul className={style.list}>
        {dataCharacter.length > 0 &&
          dataCharacter.map((item) => (
            <li key={item.id} className={style.item}>
              <img src={item.image} alt={item.name} width={250} />
              <p className={style.name}>{item.name}</p>
            </li>
          ))}
      </ul>

      <div className={style.navigation}>
        <button disabled={!infoCharacter.prev} onClick={handlePrev}>
          Prev
        </button>

        <span>{currentPage()}</span>

        <button disabled={!infoCharacter.next} onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}
