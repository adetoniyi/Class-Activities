#!/usr/bin/env node 

function returnedArray(arr, fn) {
    const result = []
    
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i], i)
    }
    return result
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const trans = (value, index) => value * index
console.log(returnedArray(arr, trans))
