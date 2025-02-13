#!/usr/bin/env node 

//function to check the equality of a string 

function isAnagram(str1, str2) {
    if (str1.length === str2.length) {
        return true
    }
    
    let a = str1.split('').sort().join('')
    let b = str2.split('').sort().join('')
    
    return a === b
}
console.log(isAnagram('john', 'tobi'))
