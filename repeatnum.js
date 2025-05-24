/*
Given an array arr[] of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times. The task is to find the repeating numbers.

Note: The repeating element should be printed only once.

Example: 

Input: n = 7, arr[] = [1, 2, 3, 6, 3, 6, 1]
Output: 1, 3, 6
Explanation: The numbers 1 , 3 and 6 appears more than once in the array.

Input : n = 5, arr[] = [1, 2, 3, 4 ,3]
Output: 3
Explanation: The number 3 appears more than once in the array.

*/


function dublicate(arr) {
    const vlauestore = {};
    const repeatValue = [];

    for (const num of arr) {

        if (vlauestore[num] === 1) {
            repeatValue.push(num);
            vlauestore[num]++;
            // console.log(vlauestore)
              
        } else {
            vlauestore[num] = 1;
        }
    }

    return repeatValue;
}

console.log(dublicate([1, 2, 3, 6, 3, 6, 1])); 
console.log(dublicate([1, 2, 3, 4, 3])); 
