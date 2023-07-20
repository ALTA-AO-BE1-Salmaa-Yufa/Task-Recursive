function exponentiation(x, n) { // (2,3) -> 2 * 2 * 2
    if (n === 0) { // tidak memenuhi 
        return 1;
    } else if (n % 2 === 0) { //tidak memenuhi
        const y = exponentiation (x, n / 2); // (2,3/2)
        return y * y; //
        } else {
        return x * exponentiation (x, n - 1); // (2, 3 - 1)
    }
  }
  
/* exponentiation (2,3)
    

*/

  
  console.log(exponentiation(2, 3)) // 8
  console.log(exponentiation(2, 12)) // 4096
  console.log(exponentiation(7, 2)) // 49
  console.log(exponentiation(9, 3)) // 729
  console.log(exponentiation(22, 5)) // 5153632
  console.log(exponentiation(1996, 0)) // 1
  console.log(exponentiation(4213, -3)) // “wrong input”
  