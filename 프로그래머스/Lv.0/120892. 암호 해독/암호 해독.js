function solution(cipher, code) {
    const arr = [...cipher]
    
    return arr.filter((a, i) => (i+1) % code === 0).join('')
}