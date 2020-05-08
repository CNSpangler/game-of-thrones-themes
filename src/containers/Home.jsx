import React from 'react';
import Characters from '../components/App/Characters/Characters';

const Home = ({ characters }) => {
  return (
    <>
      {/* <Paging /> */}
      <Characters characters={characters} />
    </>
  );
};

export default Home;
