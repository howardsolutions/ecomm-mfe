import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

function authMount(el, { onNavigate, defaultHistory }) {
  const memoryHistory = defaultHistory || createMemoryHistory();

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
// Run the Auth app independently
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot)
    authMount(devRoot, { defaultHistory: createBrowserHistory() });
}

// Expose for the container
export { authMount };