function solution(my_strings, parts) {
    return my_strings.map((item, index) => item.substring(parts[index][0], parts[index][1] + 1)).join('');
}