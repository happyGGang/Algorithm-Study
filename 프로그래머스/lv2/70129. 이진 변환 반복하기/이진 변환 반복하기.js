function solution(s) {
    let count = 0;
    let deletedZero = 0;
    let x = s;
    while (x !== '1') {
        const prevLength = x.length;
        const curLength = x.split('').filter(item => item !== "0").length
        x = curLength.toString(2);
        count++;
        deletedZero += prevLength - curLength;
    }
    return [count, deletedZero];
}
