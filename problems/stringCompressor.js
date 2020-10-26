// Cracking the Coding Interview
// Problem 1.6: String Compression

let assert = require('assert')

function stringCompressor(string) {
    let result = ""
    let number = 1
    let letter = ""

    for (let i = 0; i < string.length + 1; i++) {
        if (string[i] === letter) {
            number++
        } else if(string[i] !== letter && letter === "") {
            letter = string[i]
            number = 1
        } else if (string[i] !== letter) {
            result = result.concat(letter, number)
            letter = string[i]
            number = 1
        }
    }
    return (result.length < string.length) ? result : string
}

describe('String Compression', () => {
    it('should return a compressed string', () => {
        let string = "aabcccccaaa"
        assert.strictEqual("a2b1c5a3", stringCompressor(string))
    })
    it('should return the original string if the compressed version is not smaller', () => {
        let string = "abc"
        assert.strictEqual("abc", stringCompressor(string))
    })
})