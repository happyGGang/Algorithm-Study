function solution(num_list) {
    var 짝수 = [];
    var 홀수 = [];
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 !== 0) {
            홀수.push(num_list[i])
        }else {
        짝수.push(num_list[i])
    }
    }
    return Number(짝수.join('')) + Number(홀수.join(''))
}