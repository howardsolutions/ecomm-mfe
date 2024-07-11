import {productMount} from 'products/ProductsIndex';
import {cartMount} from 'cart/CartShow';

productMount(document.getElementById('my-products'));
cartMount(document.getElementById('my-cart'))