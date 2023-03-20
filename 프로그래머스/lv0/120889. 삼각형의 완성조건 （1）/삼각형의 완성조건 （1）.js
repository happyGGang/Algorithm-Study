function solution(sides) {
    let arr = sides.sort((a, b) => b - a)
    return arr[0] < arr[1] + arr[2] ? 1 : 2;
}