function solution(n) {
    const result = []
    let divider = 2
    while(n !== 1) {
        if(n%divider === 0) {
            result.push(divider)
            n /= divider
        } else {
            divider += 1
        }
    }
    return [...new Set(result)]
}