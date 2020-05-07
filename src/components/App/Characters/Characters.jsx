import React from 'react';
import Character from '../Character/Character';
import { useCharacters } from '../../../hooks/GoTProvider';

const Characters = () => {
  const characters = useCharacters();

  const characterElements = characters.map(character => (
    <li key={character.url}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

export default Characters;
