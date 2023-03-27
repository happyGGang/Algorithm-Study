function solution(array, n) {
    var answer = []
    for(let i = 0; i < array.length; i++) {
        answer.push(Math.abs(array[i] - n))
    }
    
    let min = Math.min(...answer)

    return array.filter(item => Math.abs(item -n) === min).sort()[0]
     
    
}