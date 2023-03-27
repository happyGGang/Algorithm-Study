function solution(i, j, k) {
    var answer = [];
    for(let a = i; a <= j; a++) {
        answer.push(String(a))
    }
    return answer.join('').split('').filter(item => item === String(k)).length;
}