function solution(s) {
    return s.length % 2 !== 0 
        ? s.charAt(Math.floor(s.length / 2))
        : s.charAt((s.length / 2) -1) + s.charAt(s.length / 2);
}