function solution(array, n) {
    return array.filter(x => [n].includes(x)).length
}