function solution(myString, pat) {
    var answer = 0;
    let arr = myString.split('').map(item => item === 'A' ? 'B' : 'A').join('')
    return arr.includes(pat) ? 1 : 0;
}