/*
- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
*/

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(10));
  