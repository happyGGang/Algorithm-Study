function solution(price, money, count) {
    let pay = 0
    for(let i = 1; i <= count; i++) {
        pay += price * i
    }
    
    if(pay > money) {
        return pay - money
    }else{
        return 0
    }
}