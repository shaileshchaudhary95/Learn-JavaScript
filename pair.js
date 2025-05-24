/*
Please Complete Below Task  ASAP

Input: arr[] = [0, -1, 2, -3, 1], target = -2
Output: true
Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.

Input: arr[] = [1, -2, 1, 0, 5], target = 0
Output: false
Explanation: There is no pair with sum equals to given target.
*/


function myPair(arr, target) {
    const result = {};

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        const responseValue = target - value;

        if (responseValue in result) {
            return true;
        }
        result[value] = true;
    }
    return false;
}

console.log(myPair([0, -1, 2, -3, 1], -2));
console.log(myPair([1, -2, 1, 0, 5], 0));



// +++++++++++++++++++++ solution working idea +++++++++++++++++++++++++++

/*

function myPair(arr, target) {
    const result = {}
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

        // console.log(value)

        const responseValue = target - value;

        // console.log(`the array value is ${value}`)
        // console.log(`the responseValue is ${responseValue}`)
        // console.log(`the responseValue is ${responseValue} = ${target} - ${value}`)
        // console.log(`the target value is ${target}`)

        console.log(`There is a pair(${value}, ${responseValue}) with the sum equal to given target is, ${value} + ${responseValue} = ${target} `)

        if (responseValue in result) {
            return true;
        }
        result[value] = true;
    }
    return false;
}

console.log(myPair([0, -1, 2, -3, 1], -2));
console.log(myPair([1, -2, 1, 0, 5], 0));

*/
