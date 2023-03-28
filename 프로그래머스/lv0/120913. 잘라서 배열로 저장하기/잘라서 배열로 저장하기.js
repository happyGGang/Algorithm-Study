function solution(my_str, n) {
    var answer = [];
    var arr = my_str.split('')
    while(arr.length > 0) {
        answer.push(arr.splice(0, n).join(''))
    }
    return answer;
}