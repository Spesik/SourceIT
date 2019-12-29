const arrNums = [1, 2, 3, 4, 5];
console.log(arrNums);
console.log('Lenght', arrNums.length);
console.log('Elem index 2', arrNums[2]);
arrNums[2] = 44;
console.log('Elem index 2', arrNums[2]);
arrNums.length = 0;
console.log(arrNums);
arrNums[arrNums.length] = 44;
arrNums[arrNums.length] = 45;
console.log(arrNums);
arrNums.push(67, 5, 69, 8);
arrNums.unshift(77);
console.log(arrNums);
console.log('-----------------');
const firstElement = arrNums.shift();
console.log(arrNums, firstElement);
arrNums.push(2, 3, 4, 5);
const nArray = arrNums.slice(1, 4);
console.log(arrNums, nArray);
console.log('-----------------');
const nnArray = arrNums.splice(1, 2, 3333, 4444);
console.log(arrNums, nnArray);

let arrNums1 = [1, 2, 3, 4];
arrNums1 = arrNums1.concat([11, 22, 33], 555);
console.log(arrNums1);

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
console.log('-for-');
for (let index = 0; index < days.length; index++) {
    console.log(days[index]);
}
console.log('-for of-');
for(const day of days) {
    console.log(day);
}
console.log('-for in-');
for(const day in days) {
    // days[index] += ' index(${index})'
}
console.log(days);

console.log('-matrix-');
const matrix = [
    [1, 2, 3],
    [11, 22, 33],
    [111, 222, 333]
];
console.log(matrix);
console.log(matrix[2] [1]);
console.log('-------------------');
for(const row of matrix) {
    console.log(row);
    for(const cell of row) {
        console.log(cell);
    }
}
