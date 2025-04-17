/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import * as bootstrap from 'bootstrap';

const button = document.getElementById('toggleButton');

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

/**
 *  Canvi Menu.
 */
button.addEventListener('click', () => { 
  document.querySelector(".menu").classList.toggle("active");  
});