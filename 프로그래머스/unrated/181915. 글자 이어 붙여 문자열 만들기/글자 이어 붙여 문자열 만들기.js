function solution(my_string, index_list) {
    let str = my_string.split('')
    return index_list.map(item => str[item]).join('');
}