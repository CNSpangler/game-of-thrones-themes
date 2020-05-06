import React from 'react';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../../services/GoT-API';

const GoTContext = createContext();

const GoTProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(6)
      .then(results => setCharacters(results))
  }, [characters])
  
  return (
    <GoTContext.Provider value={{ characters }}>
      {children}
    </GoTContext.Provider>
  );
};

GoTProvider.propTypes = {};

export default GoTProvider;