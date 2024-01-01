function solution(num_list) {
    const arr = [...num_list]
    
    const 짝수 = arr.filter((num) => num % 2 === 0).length
    const 홀수 = arr.filter((num) => num % 2 !== 0).length
    
    return [짝수, 홀수]
}