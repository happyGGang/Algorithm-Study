function solution(numbers, k) {
    let index = (2 * (k - 1)) % numbers.length
    return numbers[index];
}