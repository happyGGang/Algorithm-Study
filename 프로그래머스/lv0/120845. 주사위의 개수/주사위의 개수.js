function solution(box, n) {
    let a = Math.floor(box[0] / n)
    let b = Math.floor(box[1] / n)
    let c = Math.floor(box[2] / n)
    return a*b*c;
}