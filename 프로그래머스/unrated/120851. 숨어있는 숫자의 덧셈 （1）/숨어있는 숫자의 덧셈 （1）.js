function solution(my_string) {   
    return [...my_string].filter(x => x < 10).map(Number).reduce((acc, cur) => acc + cur)  
}