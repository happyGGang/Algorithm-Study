function solution(absolutes, signs) {
    var answer = 0;
    absolutes.forEach((item, index) => {
        if(signs[index]) {
            answer += item
        }else {
            answer -= item
        }
    })
    return answer;
}