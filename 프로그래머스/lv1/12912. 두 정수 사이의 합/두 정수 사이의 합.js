function solution(a, b) {
    let result = 0
    let max = Math.max(a, b)
    let min = Math.min(a,b)
    for(i=min; i<=max; i++) {
        result += i
    }
    return result
}