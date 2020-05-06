import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, titles, aliases }) => {
  const aliasElements = aliases.map(alias => 
    <li key={alias.i}>alias</li>
  )
  
  return (
    <>
      Name: {name ? <h3>name</h3> : <h3>aliases[0]</h3>}
      Title: {titles && <h4>titles[0]</h4>}
      Aliases:
      <ul>{aliasElements}</ul>
    </>
  );};

Character.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  aliases: PropTypes.array
};

export default Character;
