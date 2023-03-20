function solution(my_string) {
    var answer = 0;
    my_string.split('').map(item => !isNaN(item) ? answer += Number(item) : 0)
    return answer;
}