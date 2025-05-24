/* Task 3 :

const input = ["racecar", "apple", "madam", "banana", "civic"];
const result = classifyPalindromes(input);

{
  palindrome: { count: 3, record: ["racecar", "madam", "civic"] },
  nonPalindrome: { count: 2, record: ["apple", "banana"] }
}
*/

const input = ["racecar", "apple", "madam", "banana", "civic"];

function separate(arr) {
    const values = {
        palindrome: { count: 0, record: [] },
        nonPalindrome: { count: 0, record: [] },
    };

    for (let i = 0; i < input.length; i++) {
        const inputParts = input[i].split('')
        // console.log(inputParts)
        const inputReverseParts = inputParts.reverse()
        // console.log(inputReverseParts)
        const inputReverseJoinParts = inputReverseParts.join('')
        // console.log(inputReverseJoinParts)

        if (input[i] === inputReverseJoinParts) {
            values.palindrome.count++;
            values.palindrome.record.push(input[i]);
        } else {
            values.nonPalindrome.count++;
            values.nonPalindrome.record.push(input[i]);
        }
    }

    return values;
}

const result = separate(input)

console.log(result)

