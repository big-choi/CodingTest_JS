function solution(money) {
    const americano = 5500
    const maxCoffee = Math.trunc(money / americano)
    const charge = money - (americano * maxCoffee)
    
    return [maxCoffee, charge]
}