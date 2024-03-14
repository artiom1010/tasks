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

function isPalindrome(initialNumber) {
    const convertedNumber = String(initialNumber);
    const length = convertedNumber.length;
    
    for (let i = 0; i < length / 2; i++) {
        if (convertedNumber[i] !== convertedNumber[length - 1 - i]) {
            return false;
        }
    };

    return true;
}

console.log(isPalindrome(1234321));
console.log(isPalindrome(7234321));



// list = ['apple', 'banana', 'chery', 'watermelon']
// for element in list[0:0]:
    // print(element)


