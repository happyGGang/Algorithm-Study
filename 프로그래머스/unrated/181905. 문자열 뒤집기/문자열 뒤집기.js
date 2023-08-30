function solution(my_string, s, e) {
    var a = my_string.split('').slice(0, s).join('')
    var b = my_string.split('').slice(s, e + 1).reverse().join('')
    var c = my_string.split('').slice(e + 1).join('')
    return s === e ? my_string : `${a}${b}${c}`;
}