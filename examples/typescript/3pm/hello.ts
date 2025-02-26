// SUPERSET of javascript
// type safety
// make a function called sayHello
function sayHello(name: string): string {
    return `Hello, ${name}`;
}
// it takes a parameter called name
// return a interpolated string that injects name

// outside of function console log sayHello passing your name as a parameter
console.log(sayHello('Myles'));