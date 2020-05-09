import React from 'react';
import Header from '../Header/Header.jsx';
import Characters from '../Characters/Characters.jsx';
import styles from './App.css';
import { useFireIce } from '../../hooks/GoTProvider.jsx';

export default function App() {
  const fireIce = useFireIce();

  return (
    <div className={fireIce === 'fire' ? styles.fire : styles.ice} >
      <Header />
      <Characters />
    </div>
  );
}
