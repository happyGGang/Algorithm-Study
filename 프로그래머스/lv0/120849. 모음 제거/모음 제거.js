function solution(my_string) {
    const str = 'aeiou'
    return my_string.split('').filter(item => !str.includes(item)).join('')
}