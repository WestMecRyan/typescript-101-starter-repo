function isPrime(n: number): string[] {
    let isPrimeArr: string[] = [];
    for (let i = 1000000; i <= n; i++) {
        if ((i % 2 === 0 && i != 2) || (i % 3 === 0 && i != 3) || (i % 5 === 0 && i != 5)) {

         isPrimeArr.push(i.toString());
        }
        else {
            isPrimeArr.push("prime");
        }
    }
    return isPrimeArr;
}

console.log(isPrime(1001000));