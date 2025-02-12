#!/usr/bin/env node 

//Largest Number in an arry 


function secondLargest(arr) {
    if (arr.length < 2) return null 
    let first = -Infinity, second = -Infinity
    for (let num of arr) {
        if (num > first) {
            second = first
            first = num
        } else if (num > second && num < first) {
            second = num
        }
    }
    return second === -Infinity ? null : second 
}
const arr = [5, 10, 40, 25, 57]
console.log(secondLargest(arr))
