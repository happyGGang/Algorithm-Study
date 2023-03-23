function solution(s) {
    var answer = '';
    var arr = s.split(' ')
    var max = Math.max(...arr)
    var min = Math.min(...arr)
    return `${min} ${max}`;
}