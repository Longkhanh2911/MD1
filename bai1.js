let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 0];

function sort(numbers) {
    let result = [];
    for (number of numbers) {
        if (number === 0) {
            result.push(number);
        }
    }
    for (number of numbers) {
        if (number % 2 == 0 && number != 0) {
            result.unshift(number);
        } else if (number % 2 != 0) {
            result.push(number);
        }
    }
    return result;
}
let result = sort(numbers);
console.log(result)



