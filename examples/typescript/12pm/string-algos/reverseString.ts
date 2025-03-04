// function reverseString
/**
* objective: pass in a string and return the string reversed
* @param str - passed in string
* @returns str - reversed string
*/
function reverseString(str: string): string {
    // let reversedStr: string = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversedStr += str[i];
    // }
    // return reversedStr;
    // return str.split('').reverse().join('');

    let stringArr: string[] = [];

    for (let i = str.length - 1; i >= 0; i--) {
        stringArr.push(str[i]);
    }

    return stringArr.join('')
}

function isPalindrome(str: string):boolean {
    // return reverseString(str) === str ? true : false;

    return reverseString(str) === str;

    // if (reverseString(str) === str) {
    //     return true
    // } else {
    //     return false;
    // }
}
// console.log(reverseString('Bob Loblaw Law Blog'));
console.log(isPalindrome('racecar'));
