function solution(my_string, n) {
    return my_string.split('').map(item => item.repeat(n)).join('');
}