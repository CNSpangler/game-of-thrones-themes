import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App/App.css';

const Character = ({ name = 'unknown', culture, titles, aliases }) => {
  const aliasElements = aliases.map((alias, i) => 
    <li key={i}>{alias}</li>
  );
  
  return (
    <section className={styles.card}>
      {name ? <h3>Name: {name}</h3> : <h3>{aliases[0]}</h3>}
      {culture !== '' && <h4>Culture: {culture}</h4>}
      {titles[0] && <h4>Title: {titles[0]}</h4>}
      {aliases.length > 1 && <ul>Aliases: {aliasElements}</ul>}
    </section>
  );};

Character.propTypes = {
  name: PropTypes.string,
  culture: PropTypes.string,
  titles: PropTypes.array,
  aliases: PropTypes.array
};

export default Character;
