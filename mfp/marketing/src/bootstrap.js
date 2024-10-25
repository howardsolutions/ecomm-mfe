import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history';

function marketingMount(el, { onNavigate }) {
  const memoryHistory = createMemoryHistory();

  if (onNavigate) {
    memoryHistory.listen(onNavigate);
  }

  ReactDOM.render(<App history={memoryHistory} />, el);

  return {
    onParentNavigate(location) {
      const { pathName: nextPathName } = location;

      const pathName = memoryHistory.location;

      if (pathName !== nextPathName) {
        memoryHistory.push(nextPathName);
      }
    },
  };
}
// Run the Marketing app independently
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) marketingMount(devRoot, {});
}

// Expose for the container
export { marketingMount };
