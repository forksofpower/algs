// Cracking the Coding Interview
// Problem 1.7: Rotate Matrix

let assert = require('assert')

function rotateMatrix(m) {
    // side length of matrix
    let n = m[0].length
    // loop through rings
    // a matrix has n/2 rings
    for(let j = 0; j < n/2; j++) {
        for(let i = j; i < n - j - 1; i++) {
            // store current cell
            let tmp = m[j][i]
            
            // right to top
            m[j][i] = m[i][n - 1 - j]
            // bottom to right
            m[i][n - 1 - j] = m[n - 1 - j][n - 1 - i]
            // left to bottom
            m[n - 1 - j][n - 1 - i] = m[n - 1 - i][j]
            // temp to left
            m[n - 1 - i][j] = tmp
        }
    }

    return m
}

describe('Rotate Matrix', () => {
    it('should return a matrix rotated counter clockwise', () => {
        let before = [[1,2,3], [4,5,6], [7,8,9]]
        let after = [[3,6,9],[2,5,8],[1,4,7]]
        assert.deepStrictEqual(after, rotateMatrix(before))
    })
})