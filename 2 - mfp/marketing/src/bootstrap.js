import React from 'react';
import ReactDOM from 'react-dom';

function marketingMount(el) {
    ReactDOM.render(
        <h1>Hi there</h1>,
        el
    )
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) marketingMount(devRoot);
}

export {marketingMount}