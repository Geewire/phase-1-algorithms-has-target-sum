//function hasTargetSum(array, target) {
  // Should be a function with 2 arguments
  //The function should return true if any pair of numbers in the array adds up to the target number

//Runtime: 0(n)
function hasTargetSum(array, target) {
  const seenNumbers ={}
  for(const number of array){
    //n steps
  const temp = target- number;
  if(temp in seenNumbers) return true
  seenNumbers[number]= true
}
return false
}

  //pseudocode
  // Should be a function with 2 arguments
  //The function should return true if any pair of numbers in the array adds up to the target number
  //Function for adding up arrays,should iterate through array by subtracting
  //second iteration for temp

  

/* 
  Runtime 0(n^2)
  Space : 0(n)
*/

/* 
  //Function for adding up arrays
  //boolean for checking results
*/

/*
  Create an object
  Iterate through array
  Obj should be the temp(target minus array)
  use object key to find matches
*/

// Test Cases
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 5, 12, 4, 10, 7], 15));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 29], 30))

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


//Runtime: 0(n^2)
  //for (let i = 0; i < array.length; i++) {
    //n steps
  //  let temp = target - array[i];

   // for (let j = i + 1; j < array.length; j++) {
      //n *n steps
   //   if (array[j] === temp) return true;
   // }
  //}
 // return false
//}