// 1.TwoSum

// function twoSum(nums = [7, 2, 2, 1, 4, 3], target = 8) {

//     const map = new Map(); 
  
//     for (let i = 0; i < nums.length; i++) {
//       const number = target - nums[i];
  
//       if (map.has(number)) {
//         return [map.get(number), i];
//       }
  
//       map.set(nums[i], i);
//     }
  
//     return null; 
//   }
  
//   console.log(twoSum()); 




// 2.Palindrome Number

// Solution 1

// let initialNumber = 121

// let convertedNumber = String(initialNumber)
// let strNumber = convertedNumber.split('').reverse().join('')

// if (convertedNumber === strNumber) {
//     console.log(true)
// } else {
//     console.log(false)
// }



// Solution 2

const initialNumber = 1234321;
const convertedNumber = String(initialNumber);

const length = convertedNumber.length;

for (let i = 0; i < length; i++) {
    if (convertedNumber[i] == convertedNumber[length - 1 - i]) {
        console.log(true)
    } else {
        console.log(false);
        break;
    }
};



