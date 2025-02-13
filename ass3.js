#!/usr/bin/env node

//number of occurrence of an eleement 

function countOccurrences(arr) {
    const frequency = {};
    
    arr.forEach(element => {
        frequency[element] = (frequency[element] || 0) + 1;
    });
    
    return frequency;
}

// Example usage
const arr = ['pelumi', 'tobi', 'pelumi', 'kayode', 'tobi', 'tobi', 'tobi', 'kayode'];
console.log(countOccurrences(arr));