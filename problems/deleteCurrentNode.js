// Cracking the Coding Interview
// Problem 2.3: Delete Current Node

let assert = require('assert')

class Node {
    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}

function deleteCurrentNode(node) {
    if (!node.next) return false;
    node.val = node.next.val
    node.next = node.next.next
}

describe('2.3 Delete Middle Node', () => {
    it('should return a linked list with the head replaced', () => {
        let source = new Node(1, new Node(2, new Node(3, new Node(4))))
        let before = source.next.next // given 3rd node
        let after = new Node(1, new Node(2, new Node(4)))
        // this will modify the source list in place
        deleteCurrentNode(before)

        assert.deepStrictEqual(after, source)
    })
})