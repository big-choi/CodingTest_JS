function solution(numbers) {
    let arr = [...numbers]
    return arr.reduce((a, b) => a + b) / arr.length
}