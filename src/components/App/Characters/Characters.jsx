import React from 'react';
import Character from '../Character/Character';
import { useCharacters, useUpdatePage, usePage } from '../../../hooks/GoTProvider';

const Characters = () => {
  const characters = useCharacters();
  const page = usePage();
  const updatePage = useUpdatePage();

  const characterElements = characters.map(character => (
    <li key={character.url}>
      <Character {...character} />
    </li>
  ));

  return (
    <>
      <button onClick={() => updatePage(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => updatePage(+1)} >&gt;</button>
      <ul>
        {characterElements}
      </ul>
    </>
  );
};

export default Characters;
