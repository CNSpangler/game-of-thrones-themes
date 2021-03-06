export const fetchCharacters = (page) => {
  return fetch(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=25`)
    .then(res => res.json())
    .then(json => json.map(character => ({
      url: character.url,
      name: character.name,
      culture: character.culture,
      titles: character.titles,
      aliases: character.aliases
    })));
};
