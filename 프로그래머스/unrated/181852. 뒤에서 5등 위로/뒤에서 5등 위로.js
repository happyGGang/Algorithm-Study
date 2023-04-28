function solution(num_list) {
    return num_list.sort((a, b) => a - b).splice(5, num_list.length -1)
}