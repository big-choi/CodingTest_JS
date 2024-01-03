function solution(num_list) {
    const 짝수 = num_list.filter(x => x % 2 === 0).length // 짝수
    const 홀수 = num_list.filter(x => x % 2 !== 0).length // 홀수
    
    return [짝수, 홀수]
}