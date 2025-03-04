// FIZZBUZZ
// ===========

/**
 * Classic FizzBuzz implementation
 * Prints numbers from 1 to n, but:
 * - For multiples of 3, print "Fizz" instead of the number
 * - For multiples of 5, print "Buzz" instead of the number
 * - For multiples of both 3 and 5, print "FizzBuzz"
 *
 * @param n The upper limit (inclusive)
 * @returns An array containing the FizzBuzz sequence
 */

function fizzBuzz(n: number): string[] {
    let stringArr: string[] = [];

    for (let i = 1; i <= n; i++) {
         if (i % 15 === 0) {
            stringArr.push('fizzbuzz');
        }
        else if (i % 3 === 0) {
            stringArr.push('fizz');
        }
        else if (i % 5 === 0) {
            stringArr.push('buzz');
        }
        else {
            stringArr.push(i.toString());
        }

    }

    return stringArr;
}


console.log(fizzBuzz(100));