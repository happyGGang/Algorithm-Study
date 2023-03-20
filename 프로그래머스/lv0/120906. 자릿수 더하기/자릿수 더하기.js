function solution(n) {
    return String(n).split('').map(Number).reduce((a, c) => a + c)
}