function solution(hp) {
    let 장군 = Math.trunc(hp / 5)
    let 병정 = Math.trunc((hp - 장군 * 5) / 3) 
    let 일 = hp - (장군 * 5) - (병정 * 3)
    
    return 장군 + 병정 + 일
}