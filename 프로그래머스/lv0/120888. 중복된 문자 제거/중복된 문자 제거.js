function solution(my_string) {
    const strArr = my_string.split('')
    const arr = new Set(strArr)
    return [...arr].join('')
}