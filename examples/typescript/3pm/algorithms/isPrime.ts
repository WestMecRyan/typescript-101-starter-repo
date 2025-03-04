function sayPrime(n: number): string[] {
    let isPrimeArr: string[] = [];

    for (let i = 1; i <= n; i++) {
        if ((i % 2 === 0 && i != 2) || (i % 3 === 0 && i != 3) || (i % 5 === 0 && i != 5) || (i % 7 === 0 && i != 7)) {

            isPrimeArr.push(i.toString());
        }
        else {
            isPrimeArr.push('prime');
        }
    }
    return isPrimeArr;
}

console.log(sayPrime(100));