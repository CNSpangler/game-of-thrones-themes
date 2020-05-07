import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, culture, titles, aliases }) => {
  const aliasElements = aliases.map((alias, i) => 
    <li key={i}>{alias}</li>
  );
  
  return (
    <>
      {name ? <h3>Name: {name}</h3> : <h3>{aliases[0]}</h3>}
      {culture && <h4>{culture}</h4>}
      {titles && <h4>Title: {titles[0]}</h4>}
      {aliases && <ul>Aliases: {aliasElements}</ul>}
    </>
  );};

Character.propTypes = {
  name: PropTypes.string,
  culture: PropTypes.string,
  titles: PropTypes.array,
  aliases: PropTypes.array
};

export default Character;
