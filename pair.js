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



// +++++++++++++++++++++ solution working idea down +++++++++++++++++++++++++++

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
