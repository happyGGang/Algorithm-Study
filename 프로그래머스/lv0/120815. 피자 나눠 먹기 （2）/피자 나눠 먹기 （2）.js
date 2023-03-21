function solution(n) {
    var box = 1;
    while((box*6) % n !== 0) {
        box ++
    }
    return box;
}