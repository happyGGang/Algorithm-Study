function solution(a, b) {
    let x = Number([a, b].join(''))
    let y = Number([b, a].join(''))
    return Math.max(x, y);
}