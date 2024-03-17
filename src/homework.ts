// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
//A: number
console.log(a)
let b = 'Thieves';
// A: string
console.log(b)
let c = [true, false, false];
//A: boolean
console.log(c)
let d = {age: number};
//A: number
console.log(d)

let e = [3]
// A: number

let f;
// A: any

let g = []
// A: any



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: missing required properties

let prices = [100, 200, 300];
prices[0] = '$100';
// A:cannot assign a string to a number variable

function myFunc(a: number, b: number): number {}
// A: missing return

//CODEWARS PROBLEMS IN JS:

//1. EVEN OR ODD 
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

//2. Return Negative
function makeNegative(num) {
    if (num < 0){
      return num
    }
    return -num
    }
