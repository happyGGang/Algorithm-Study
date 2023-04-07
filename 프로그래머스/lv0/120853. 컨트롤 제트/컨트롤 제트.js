function solution(s) {
    let arr = s.split(' ')
    let result = 0
    arr.forEach((item, index) => {
        if(item !== 'Z' && arr[index + 1] !== 'Z'  ) {
            result += (Number(item))
        }
    })
    return result;
}