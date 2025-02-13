#!/usr/bin/env node 


function filteredArr(arr, fn) {
    const filteredArr = []
    
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i))
            filteredArr.push(arr[i])
    }
    return filteredArr 
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = (num) => num % 2 !== 0 
console.log(filteredArr(arr, odd))