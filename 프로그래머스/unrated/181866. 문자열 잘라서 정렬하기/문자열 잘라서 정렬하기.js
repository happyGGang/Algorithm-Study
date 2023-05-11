function solution(myString) {
    var answer = [];
    console.log(myString.split('x').sort())
    return myString.split('x').sort().filter(item => item !== '');
}