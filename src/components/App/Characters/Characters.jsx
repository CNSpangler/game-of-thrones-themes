import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character';

const Characters = ({ characters }) => {
  const characterElements = characters.map(character => {
    <li>
      <Character {...character} />
    </li>;
  });

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    culture: PropTypes.string,
    titles: PropTypes.array,
    aliases: PropTypes.array

  }))
};

export default Characters;
