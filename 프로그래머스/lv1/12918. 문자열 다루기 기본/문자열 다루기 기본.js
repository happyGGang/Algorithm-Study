function solution(s) {
    if(s.length === 4 || s.length === 6) {
        let arr1 = s.toUpperCase().split('')
        let arr2 = s.toUpperCase().split('').filter(item => !isNaN(item))
        
        return arr1.length === arr2.length ? true : false
    }else {
        return false
    }
}