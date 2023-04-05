// // Q1



// function fibonacci(n) {
//     if (n === 0) {
//         return [];
//     } else if (n === 1) {
//         return [0];
//     } else if (n === 2) {
//         return [0, 1];
//     } else {
//         let sequence = fibonacci(n - 1);
//         sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
//         return sequence;
//     }
// }


// console.log(fibonacci(10));


// // Q2



// const numbers = [1, 2, 3, 4, 5];


// let sum = 0;


// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }


// console.log(sum);




// // Q3



// const n = "Orange academy";


// const arr = n.split("");


// arr.reverse();


// const nreverse = arr.join("");


// console.log(nreverse);


// -----------------------------------------------

// Data Structure


// Q1

// const stack = [];
// const minStack = [];

// function myPush(num) {
//     stack.push(num);
//     if (minStack.length === 0 || num <= minStack[minStack.length - 1]) {
//         minStack.push(num);
//     }
// }
// function getMin() {
//     return minStack[minStack.length - 1];
// }

// myPush(1);
// myPush(2);
// myPush(3);
// myPush(4);
// myPush(5);
// console.log(getMin());





// // Q2





// // function reverseQueue(queue) {
// //     let stack = [];
// //     while (queue.length > 0) {
// //         stack.push(queue.shift());
// //     }
// //     while (stack.length > 0) {
// //         queue.push(stack.pop());
// //     }
// //     return queue;
// // }
// // let queue = [1, 2, 3, 4, 5];
// // console.log(reverseQueue(queue));

// // Q3


// class Queue {
//     constructor() {
//         this.s1 = [];
//         this.s2 = [];
//     }

//     enqueue(value) {
//         this.s1.push(value);
//     }

//     dequeue() {
//         if (this.s1.length === 0 && this.s2.length === 0) {
//             return undefined;
//         }

//         if (this.s2.length === 0) {
//             while (this.s1.length > 0) {
//                 this.s2.push(this.s1.pop());
//             }
//         }

//         return this.s2.pop();
//     }

//     isEmpty() {
//         return this.s1.length === 0 && this.s2.length === 0;
//     }

//     size() {
//         return this.s1.length + this.s2.length;
//     }

//     peek() {
//         if (this.s1.length === 0 && this.s2.length === 0) {
//             return undefined;
//         }

//         if (this.s2.length === 0) {
//             while (this.s1.length > 0) {
//                 this.s2.push(this.s1.pop());
//             }
//         }

//         return this.s2[this.s2.length - 1];
//     }
// }
// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q.peek());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.isEmpty());


// Q4


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addNode(data) {
        const new_node = new Node(data);
        if (!this.head) {
            this.head = new_node;
            this.tail = this.head;
        } else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
        this.length++;
    }

    deleteMiddleNode() {
        if (this.length < 2) {
            return this.head;
        }
        const middle = Math.floor(this.length / 2);
        let prevNode = null;
        let currNode = this.head;
        for (let i = 0; i < middle; i++) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        console.log(prevNode.next);
        prevNode.next = currNode.next;

        this.length--;
        return currNode.data;
    }
}

const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);

// console.log(linkedList)

console.log(linkedList.deleteMiddleNode())


















// Q5


// class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;
//     }
// }

// /* Function to reverse the linked list */
// function reverse(node) {
//     let prev = null;
//     let current = node;
//     let next = null;
//     while (current != null) {
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
//     node = prev;
//     return node;
// }

// // prints content of double linked list
// function printList(node) {
//     while (node != null) {
//         console.log(node.data + " ");
//         node = node.next;
//     }
// }

// // Driver Code

// head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);
// head.next.next.next = new Node(40);

// console.log("Given linked list");
// printList(head);
// head = reverse(head);
// console.log("Reversed linked list ");
// printList(head);