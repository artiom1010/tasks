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

// function isPalindrome(initialNumber) {
//     const convertedNumber = String(initialNumber);
//     const length = convertedNumber.length;
    
//     for (let i = 0; i < length / 2; i++) {
//         if (convertedNumber[i] !== convertedNumber[length - 1 - i]) {
//             return false;
//         }
//     };

//     return true;
// }

// console.log(isPalindrome(1234321));
// console.log(isPalindrome(7234321));




// Напишите функцию isConsecutive, принимающую в качестве параметра числовой массив. В случае если отсортированный массив является последовательным массивом с разницей между соседними элементами, равной 1, тогда функция должна вернуть true. В противном случае — false.

// function isConsecutive(arrayNum) {
//     arraySort = arrayNum.sort();
//     for (let i = 0; i < arraySort.length - 1; i++) {
//         if (arraySort[i] + 1 !== arraySort[i+1]) {
//             return false;
//         }
//     }
//     return true;
// }

// const array = [7, 6, 5, 5, 3, 4]; //[3, 4, 5, 5, 6, 7]
// console.log(isConsecutive(array))




// Напишите функцию findRepeatingNums, принимающую числовой массив в качестве аргумента, и которая будет возвращать массив чисел, повторяющихся в числовом массиве. 

// function findRepeatingNums(arrayNum) {
//     let duplicates = [];

//     for (let i = 0; i < 10; i++) {
        
//         let delNum = arrayNum.pop();
//         // console.log(delNum);
//         if (arrayNum.includes(delNum) && !duplicates.includes(delNum)) {
//             duplicates.push(delNum);
//         }
        
//     }
//     return duplicates;
// }

// const array = [2, 1, 2, 1, 43, 3, 342, 242424, 342, 342];

// console.log(findRepeatingNums(array));





// 3. Напишите функцию displayHashTriangle, которая будет принимать 
// параметр height, который будет являтся высотой прямого треугольника, 
// и которая будет отображать в консоли браузера прямоугольник треугольник 
// с прямым углом в правом нижнем углу консоли. В качестве символа 
// треугольника используйте # (hash-символ), а в качестве пустоты 
// — _ (underscore-символ).


// function displayHashTriangle(height) {
//     if (height === 0) {
//         console.log('Error: height cannot be 0.');
//         return; // ?
//     }
    
//     for (let i = 0; i < height; i++) {
//         let row = '';
//         for (let j = 0; j < height - i - 1; j++) {
//             row = row + '_'; // когда i растет из 0 в 1, как _ переходит на новую строку?
//         }
        
//         for (let k = height - i - 1; k < height; k++) {
//             row += '#';
//         }
        
//         console.log(row);
//     }
// }

// displayHashTriangle(4)
// ___#
// __##
// _###
// ####



// function displayReverseTriangle(height) {
//     if (height === 0) {
//         console.log('Error: height cannot be 0.');
//     }
    
//     for (let i = 0; i < height; i++) {
//         let row = '';
        
//         for (let k = height - i; k < height; k++) {
//             row += '*';
//         }

//         for (let j = 0; j < height - i; j++) {
//             row = row + '#';
//         }

//         console.log(row);
//     }
// }

// displayReverseTriangle(4)

// ####
// *###
// **##
// ***#











//// FUNCTIONS JAVASCRIPT
// 
// 
// function printMe(param) {
//     console.log(param);
// }
// printMe('printing...')


// const printMeAgain = function(a, b) {
//     console.log(a, b);
// }
// printMeAgain(10, 20);

// function sum(a, b) {
//     let sumNumber = a + b;
//     return sumNumber;
// }
// let number = sum(1, 3);
// console.log(number);


// function collectThings(x, ...y) {
//     console.log(x);
//     console.log(y);
// }
// collectThings(1, 2, 3, 4, 5, 6, 7, 8, 9)


// const one = (x, y) =>  x + y;
// console.log(one(1, 21));


// function outer() {
//     console.log('Outer');
//     function inner() {
//         console.log('Inner');
//     }

//     inner();
// }
// outer()


// function outer(x) {
//     function inner(y) {
//         return x + y;
//     }
//     return inner;
// }
// const one = outer(10);
// console.log(one(13))



////// POP
// const family = ['apple', 'cherry', 'banana', 'watermelon']
// const delMember = family.pop()
// console.log(delMember) // watermelon
// console.log(family)

////// PUSH
// const family = ['apple', 'cherry', 'banana', 'watermelon']
// const newMember = family.push('coconut')
// console.log(newMember) // 5
// console.log(family)

////// INDEXOF
// const family = ['apple', 'cherry', 'banana', 'watermelon']
// const message = "Hello, my name is artiom"
// const getIndex = family.indexOf('cherry')
// console.log(getIndex) // 1
// const getIndexMessage = message.indexOf('artiom')
// console.log(getIndexMessage) // 18
// console.log(family[1]) // cherry

////// INCLUDES
// const family = ['apple', 'cherry', 'banana', 'watermelon']
// const word = 'apple'
// console.log(family.includes(word))

////// REPEAT
// const family = ['apple', 'cherry', 'banana', 'watermelon']
// const apple = family[0].repeat(2)
// console.log(apple)








