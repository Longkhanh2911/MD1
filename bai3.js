let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]];
let number = 5;

function frequency(number, matrix) {
    let frequency = 0;
    for (row of matrix) {
        for (num of row) {
            if (num === number) {
                frequency += 1;
            }
        }
    }
    return frequency;
}

let total = frequency(number, matrix);
console.log(total);