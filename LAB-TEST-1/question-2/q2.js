const mixedArray = ['Matrix', 1, true, 2, false, 3];

let multiplyNumbers = (item) => {
    return item
    .filter((a) => !isNaN(parseInt(a)))
    .map(a => a * 5);

}

console.log(multiplyNumbers(mixedArray));
