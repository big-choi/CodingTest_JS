function solution(my_string) {
    const 모음 = ['a', 'e', 'i', 'o', 'u']
    const arr = [...my_string]
    
    return arr.filter(x => !모음.includes(x)).join('')
}