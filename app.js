// Q1



function fibonacci(n) {
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let sequence = fibonacci(n - 1);
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return sequence;
    }
}


console.log(fibonacci(10));


// Q2



const numbers = [1, 2, 3, 4, 5];


let sum = 0;


for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}


console.log(sum);




// Q3



const n = "Orange academy";


const arr = n.split("");


arr.reverse();


const nreverse = arr.join("");


console.log(nreverse);







