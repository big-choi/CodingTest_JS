function solution(s1, s2) {
    return s2.filter(x => s1.includes(x)).length
}