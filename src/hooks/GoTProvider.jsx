import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../../services/GoT-API.js';

const GoTContext = createContext();

// wrapper to provide state to child components
export const GoTProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(6);

  useEffect(() => {
    fetchCharacters(page)
      .then(results => setCharacters(results));
  }, [page]);

  return (
    <GoTContext.Provider value={{ characters, page }}>
      {children}
    </GoTContext.Provider>
  );
};

GoTProvider.propTypes = {
  children: PropTypes.node
};

export const useCharacters = () => {
  const { characters } = useContext(GoTContext);
  return characters;
};

// export const useToggle = () => {
//   const { toggle } = useContext(GoTContext);
//   return toggle;
// };
