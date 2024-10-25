import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history';

function marketingMount(el) {
  const memoryHistory = createMemoryHistory();

  ReactDOM.render(<App history={memoryHistory} />, el);
}
// Run the Marketing app independently
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) marketingMount(devRoot);
}

// Expose for the container
export { marketingMount };
