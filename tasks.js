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

// let number = String(121)
// let str_number = number.split('').reverse().join('')
// let rev_number = parseInt(str_number)

// if (number == rev_number) {
//     console.log(true)
// } else {
//     console.log(false)
// }