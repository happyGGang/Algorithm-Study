function solution(num, k) {
    var answer = [];
    var arr = String(num).split('')
    
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] === String(k)) {
            answer.push(i)
        }
    }
    
    return answer.length !== 0 ? answer[0] + 1 : -1;
}