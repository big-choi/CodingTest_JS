function solution(n) {
    const arr = []
    
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) arr.push(i)
    }
    
    return arr.length + 1
}