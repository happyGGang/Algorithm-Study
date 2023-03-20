function solution(s){
    let arr = s.toUpperCase()
    let p = arr.split('').filter(item => item === 'P').length
    let y = arr.split('').filter(item => item === 'Y').length

    return p === y ? true : false;
}