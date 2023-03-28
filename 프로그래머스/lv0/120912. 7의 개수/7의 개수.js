function solution(array) {
    var answer = 0
    let result = array.join('').split('').filter(item => item === '7').length
    return result;
}