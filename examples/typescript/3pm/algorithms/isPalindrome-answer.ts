// String Reverse - with For Loop
/**
 * Reverse a string
 * @param str The string to reverse
 * @returns str The reversed string
 */

function reverseString(str: string): string {
    /*
    let reversedStr: string = "";
    for (let i = str.length; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
    */
    // return str.split("").reverse().join("");

    const reversedChars: string[] = [];
    let i: number = str.length - 1;
    while (i>=0) {
        reversedChars.push(str[i]);
        i--;
    }
    // for (let i = str.length; i >= 0; i--) {
    //     reversedChars.push(str[i]);
    // }

    return reversedChars.join("");

}
console.log(reverseString('Hello World'));

// make a function called isPalindrome
// utilize stringReverse to help you return true or false from isPalindrome
// passing a string to isPalindrome


function isPalindrome(str: string): boolean {
    return reverseString(str.toLowerCase()).replace(/[^a-z0-9]/g, '') === str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

console.log(isPalindrome('race car'));