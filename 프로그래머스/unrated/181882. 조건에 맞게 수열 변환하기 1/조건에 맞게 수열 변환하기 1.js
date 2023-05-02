function solution(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0 && arr[i] >= 50) {
            result.push(arr[i] / 2)
        }else if(arr[i] % 2 !== 0 && arr[i] < 50) {
            result.push(arr[i] * 2)
        }else {
            result.push(arr[i])
        }
    }
    return result
}