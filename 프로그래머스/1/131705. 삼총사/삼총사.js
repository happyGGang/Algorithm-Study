function solution(numbers) {
    let count = 0;
    const length = numbers.length;

    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            for (let k = j + 1; k < length; k++) {
                if (numbers[i] + numbers[j] + numbers[k] === 0) {
                    count++;
                }
            }
        }
    }
    return count;
}