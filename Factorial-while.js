/*
- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
*/
function factorial(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
      result *= i;
      i++;
    }
    return result;
  }
  
  console.log(factorial(10));
  