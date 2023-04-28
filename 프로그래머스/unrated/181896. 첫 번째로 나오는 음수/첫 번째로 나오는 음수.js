function solution(num_list) {
    let arr = num_list.filter(item => item < 0)
    return arr.length !== 0 ? num_list.indexOf(arr[0]) : -1
}