import faker from 'faker';

function cartMount(el) {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#cart-dev');

    if (el) cartMount(el);
}

export {cartMount}