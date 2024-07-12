import faker from 'faker';


function productMount(el) {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    };

    el.innerHTML = products;
}

// Context 1: Running the product in isolation in development
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    // ASUMMING our container doesnt have an element with id 'dev-products'
    if (el) {
        productMount(el);
    }
}

// Context 2: Running this file in Development or production through CONTAINER (HOST) app

export {productMount}