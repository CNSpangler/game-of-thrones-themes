import React from 'react';
import { useToggle } from '../../hooks/GoTProvider';

const Header = () => {
  const toggle = useToggle();
  return (
    <header className={Header}>
      <h1>Game of Thrones Characters</h1>
      <input type="checkbox" id="toggle" onChange={toggle} />
      <label htmlFor="toggle">Fire/Ice</label>
    </header>
  );
};

export default Header;
