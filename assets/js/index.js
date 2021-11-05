'use strict';

fetch('/assets/js/fruits.json')
  .then((response) => response.json())
  .then((data) => {
    const allFruits = [];
    const redFruits = [];
    const largeFruits = [];
    data.forEach(({ fruit, size, color }) => {
      allFruits.push(fruit);
      if (color === 'Red') {
        redFruits.push(fruit);
      }
      if (size === 'Large') {
        largeFruits.push(fruit);
      }
    });
    console.log('All fruits:', allFruits.join(', '));
    console.log('Red fruits:', redFruits.join(', '));
    console.log('Large fruits:', largeFruits.join(', '));
  })
  .catch((error) => {
    console.log(error);
  });
