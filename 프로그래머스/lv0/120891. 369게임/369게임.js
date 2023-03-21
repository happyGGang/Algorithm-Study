function solution(order) {
    let crap = ['3','6','9']
    return String(order).split('').filter(item => crap.includes(item)).length
}