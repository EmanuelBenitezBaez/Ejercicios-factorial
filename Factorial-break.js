/*
- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, 
una bifurcación if y una sentencia break.
*/ 

function factorial(n) {
    let result = 1;
    let i = 1;
    while (true) {
      if (i > n) {
        break;
      }
      result *= i;
      i++;
    }
    return result;
  }
  
  console.log(factorial(10));
  