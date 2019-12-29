export function isEven(a) {
    return a % 2 === 0
}

export function randomArray(N = 10) {
    const resArray = [];
    for(let i = 0; i < N; i++) {
        resArray.push(Math.round(Math.random()* 100))
    }
    return resArray;
}
export function randomInteger(min, max) {
    let rnd = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rnd);
}
export function factorial (n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}