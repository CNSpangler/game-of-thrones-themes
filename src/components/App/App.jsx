import React from 'react';
import { GoTProvider } from '../../hooks/GoTProvider.jsx';
import Header from '../Header/Header.jsx';
import Characters from './Characters/Characters.jsx';

export default function App() {
  return (
    <GoTProvider>
      <Header />
      <Characters />
    </GoTProvider>
  );
}
