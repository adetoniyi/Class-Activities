#!/usr/bin/env node 

function fibonacci(n) {
    if (n <= 0) return []
    if (n === 1) return [0]

    let num  = [0, 1]
    for (let i = 2; i < n; i++) {
        num.push(num[i - 1] + num[i - 2])
    }
    return num
}
console.log(fibonacci(20))
