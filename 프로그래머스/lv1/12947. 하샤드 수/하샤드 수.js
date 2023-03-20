function solution(x) {
   return x % String(x).split('').map(Number).reduce((a, c) => a + c) === 0 ? true : false
}