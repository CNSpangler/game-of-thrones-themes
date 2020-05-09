import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { GoTProvider } from './hooks/GoTProvider';

render(
  <GoTProvider>
    <App />
  </GoTProvider>,
  document.getElementById('root')
);
