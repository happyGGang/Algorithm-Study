function solution(num_list) {
    var a = num_list.reduce((a, c) => a + c);
    var b = num_list.reduce((a, c) => a * c);
    return b > Math.pow(a, 2) ? 0 : 1
}