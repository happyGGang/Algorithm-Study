function solution(my_string) {
    const arr = my_string.match(/[0-9]+/g);
    return arr ? arr.map(item => Number(item)).reduce((a, c) => a + c, 0) : 0
}