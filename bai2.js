let numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [4, 2, 7]]

function total(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        sum = 0;
        for (let j = 0; j < numbers[i].length; j++) {
            sum += numbers[i][j];
        }
        console.log(sum);
    }
}
total(numbers) 
