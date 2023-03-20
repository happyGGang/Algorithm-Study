function solution(n) {
    const arr = []
    for(i=1; i<=n; i++) {
        arr.push(i)
    }
    return arr.filter(item => item % 2 !== 0)
}