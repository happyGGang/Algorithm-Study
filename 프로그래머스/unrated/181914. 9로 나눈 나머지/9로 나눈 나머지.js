function solution(number) {
    return number.split('').map(Number).reduce((a, c) => a + c) % 9;
}