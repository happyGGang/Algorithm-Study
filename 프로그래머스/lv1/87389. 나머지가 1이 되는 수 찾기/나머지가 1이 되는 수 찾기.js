function solution(n) {
    const arr = []
    for(i=1; i<=n; i++) {
        if(n % i === 1) arr.push(i)
    }
    return arr[0]
}