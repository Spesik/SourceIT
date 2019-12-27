import {isEven, randomArray, randomInteger} from './helperFunctions';

{
    console.log('*Task 1*');

    function arrayFill(element, arrayLength) {
        const array = [];
        for (let i = 0; i < arrayLength; i++) {
            array.push(element);
        }
        return array;
    }

    let task1Res = arrayFill('x', 5);
    console.log(task1Res);
}
{
    console.log('*Task 2*');
    const sum =
        [
            [
                [1, 2],
                [3, 4]
            ],
            [
                [5, 6],
                [7, 8]
            ]
        ]
            .reduce((resArr, itemArray) => [...resArr, ...itemArray], [])
            .reduce((resArr, itemArray) => [...resArr, ...itemArray], [])
            .reduce((sum, item) => sum + item, 0);
    console.log(sum);
}
{
    console.log('*Task 3*');

    function isNumberInRange(n) {
        return n > 0 && n < 10 // true
    }

    console.log('3:', isNumberInRange(3)); // true
    console.log('10:', isNumberInRange(10)); // false
    console.log('-4:', isNumberInRange(-4)); // false
    console.log('7:', isNumberInRange(7)); // true
}

{
    console.log('*Task 4*');
    let num = randomInteger(0, 100);
    let checkEven = isEven(num);
    console.log(num, '-', checkEven);
}
{
    console.log('*Task 5*');
    let arr = randomArray(7);
    let checkEven = arr.filter(isEven);
    console.log(arr, '-', checkEven);
}
{
    console.log('*Task 6*');
    let rnd = randomInteger(1, 200);

    function getDivisors(int) {
        let arr = [];
        for (let i = 1; i <= int; i++) {
            if (int % i === 0) arr.push(i);
        }
        return (arr.length === 0) ? int + ' is prime' : arr;
    }

    console.log(rnd, getDivisors(rnd));
}
{
    console.log('*Task 7*');
    let num = randomInteger(1, 25);
    let pwr = randomInteger(2, 7);
    const res = num ** pwr;
    console.log(num + ' ^ ' + pwr + '  =' + res);
}
{
    console.log('*Task 8*');
    let age = randomInteger(10, 30);

    function checkAge(age) {
        return (age > 16) ? console.log(age, 'Добро пожаловать') :
            console.log(age, 'Маловат ты еще');
    }

    checkAge(age);
}
{
    console.log('*Task 9*');

}
{
    console.log('*Task 10*');

}
{
    console.log('*Task 11*');

}
{
    console.log('*Task 12*');

}
{
    console.log('*Task 13*');

}
{
    console.log('*Task 14*');

}
{
    console.log('*Task 15*');

}
{
    console.log('*Task 16*');

}
{
    console.log('*Task 17*');

}
{
    console.log('*Task 18*');

}
{
    console.log('*Task 19*');

}
{
    console.log('*Task 20*');

}