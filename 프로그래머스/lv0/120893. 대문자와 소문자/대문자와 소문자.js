function solution(my_string) {
    return my_string.split('').map(item => item.charCodeAt() >= 65 && item.charCodeAt() < 97 ? item.toLowerCase() : item.toUpperCase()).join('');
}