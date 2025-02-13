#!/usr/bin/env node 


function reduceArray(nums, fn, init) {
    let val = init
    
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i])
    }
    return val 
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const sumFn = (acc, curr) => acc + curr;
const init = 0;

console.log(reduceArray(nums, sumFn, init))