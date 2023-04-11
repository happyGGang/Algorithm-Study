function solution(s) {
    let result = []
    let arr = s.split('')
    arr.forEach((item) => {
        if(arr.indexOf(item) === arr.lastIndexOf(item)) {
            result.push(item)
        }
    })
    return result.sort().join('')
}