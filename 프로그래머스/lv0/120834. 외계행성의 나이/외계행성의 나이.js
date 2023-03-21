function solution(age) {
    return String(age).split("").map((item) => 'abcdefghij'[item]).join("");;
}