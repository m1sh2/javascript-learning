// filename - module.js
export let a = 10;

export function B() {
  a = a + 5;
}

export function C() {
  a = a + 10;
}

// ---------------------------------
// In another file

import { a, B, C } from './module.js';

console.log(a); // 10
B();
console.log(a); // 15
C();
console.log(a); // 25