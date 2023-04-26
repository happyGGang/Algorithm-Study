function solution(n, control) {
    var arr = control.split('')
    var answer = n;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'w') {
            answer+=1
        }
        if(arr[i] === 's') {
            answer-=1
        }
        if(arr[i] === 'd') {
            answer+=10
        }
        if(arr[i] === 'a') {
            answer-=10
        }
    }
    return answer;
}