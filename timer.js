/*

Task 4:

create timer method which is return array of seconds at the last second

input : 5

result : 
 time 1 second
 time 2 second
 time 3 second
 time 4 second
 result is [1,2,3,4]

*/

function createTimer(seconds) {
    const result = [];

    for (let i = 1; i < seconds; i++) {
        setTimeout(() => {

            console.log(`time ${i} second`);

            result.push(i);

            setTimeout(() => {
                if (i === seconds - 1) {
                    console.log('result is', result);
                }

            }, 1000)

        }, i * 1000);
    }
}

createTimer(5)
