function solution(num_list) {
    var a = num_list.reduce((a, c) => a + c) ** 2
    var b = num_list.reduce((a, c) => a * c)
    return b < a ? 1 : 0;
}