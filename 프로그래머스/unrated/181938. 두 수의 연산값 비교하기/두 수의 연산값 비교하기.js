function solution(a, b) {
    var arr = [Number(`${a}${b}`), 2*a*b];
    return Math.max(...arr);
}