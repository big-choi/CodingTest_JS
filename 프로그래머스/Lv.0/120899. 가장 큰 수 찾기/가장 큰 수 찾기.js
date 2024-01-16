function solution(array) {
    const newArr = [...array].sort((a, b) => a - b)
    const lastIndex = array.lastIndexOf(newArr[newArr.length - 1])
    
    // return newArr[newArr.length - 1]
    // return [array, newArr] // [[1,8,3],[1,3,8]]
    return [newArr[newArr.length - 1], lastIndex]
}