function solution(before, after) {
    const bf = before.split('').sort()
    const af = after.split('').sort()
    
    const equals = (bf, af) => JSON.stringify(bf) === JSON.stringify(af);
    
    return equals(bf, af) ? 1 : 0
}