// Cracking the Coding Interview
// Problem 1.2: Check Permutations

let assert = require('assert')

function checkPermutations(a,b) {
    // strings must be the same length
    if (a.length !== b.length) return false
    
    let chars = new Map()
    // count characters in string a
    for (var i = 0; i < a.length; i++) {
        let char = a.charAt(i)
        if (chars.get(char)) {
            chars.set(char, chars.get(char) + 1)
        } else {
            chars.set(char, 1)
        }
    }
    // remove characters present in string b
    for (i = 0; i < b.length; i++) {
        let char = b.charAt(i)
        chars.set(char, chars.get(char) - 1)
    }
    // all character counts should be 0 if strings are permutations
    // console.log("chars", chars)
    for (let char in chars) {
        if (chars.get(char) !== 0) return false
    }
    return true
}

// function checkPermutations(a, b) {
//     // String must be the same length
//     if (a.length !== b.length) return false

//     // if both strings are permutations then sorting them will result in
//     a = a.split("").sort().join("")
//     b = a.split("").sort().join("")

//     return (a == b)
// }



describe('Check Permutations', () => {
    it('should return true if strings are permutations of eachother', () => {
        let a = "abbaccd"
        let b = "bcacbda"
        assert.strictEqual(true, checkPermutations(a, b))
    })

    it('should return false if strings are not permutations of eachother', () => {
        let a = "abcdefg"
        let b = "filibuster"
    })
})