/*
bandingkan array yg hingga ketemu yg terbesar */


function largestNumber(array) {
    if (array.length === 1) { // lebih dari 1 elemen 
        return array[0]; // lanjut recursive
     } else {
        const lastElement = array.pop();
        const maxInRest =largestNumber(array);
        return lastElement > maxInRest ? lastElement : maxInRest;
     }}
  
  
  console.log(largestNumber([5, 2, 67, 37, 85, 19, 10])) // 85
  console.log(largestNumber([5, 10, 20, 3, 98, 95])) // 98
  console.log(largestNumber([20, 22, 18, 25, 75, 62, 88])) // 88
  console.log(largestNumber([6, 23, 9, 5])) // 23
  console.log(largestNumber([70, 44, 28, 18, 55, 68, 11])) // 70