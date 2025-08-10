import { Burger } from './burger.js';
import { setUpButton } from './toggle.js';

customElements.define('my-burger', Burger);

setUpButton();
