function solution(myString, pat) {
    let newMyString = myString.toLowerCase()
    let newPat = pat.toLowerCase()
    return newMyString.includes(newPat) ? 1 : 0;
}