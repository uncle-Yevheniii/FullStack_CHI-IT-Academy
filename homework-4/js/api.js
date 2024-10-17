export async function allFetchCharacters(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Something went wrong!");

  return res.json();
}

export async function currentFetchCharacter(url, id) {
  const res = await fetch(`${url}/${id}`);
  if (!res.ok) throw new Error("Something went wrong!");

  return res.json();
}
