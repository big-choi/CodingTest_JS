function solution(box, n) {
    const 가로 = Math.trunc(box[0] / n)
    const 세로 = Math.trunc(box[1] / n)
    const 높이 = Math.trunc(box[2] / n)
    
    
    return 가로 * 세로 * 높이
}