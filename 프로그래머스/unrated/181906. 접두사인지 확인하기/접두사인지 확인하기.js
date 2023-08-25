function solution(my_string, is_prefix) {
  if (is_prefix.length > my_string.length) {
    return 0;
  }
 
  var prefix = my_string.slice(0, is_prefix.length);
 
  return prefix === is_prefix ? 1 : 0;
}