function solution(array, height) {
    return array.filter((cur) => cur > height).length
}