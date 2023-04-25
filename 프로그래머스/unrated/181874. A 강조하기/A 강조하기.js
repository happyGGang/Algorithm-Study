function solution(myString) {
    let arr = myString.split('').map(item => item.toLowerCase() === 'a' ? 'A' : item.toLowerCase());
    return arr.join('')
}