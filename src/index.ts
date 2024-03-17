//since TS is a superset of js, we can still write regular js code in a ts file

console.log('hello thieves')

//since TS is a superset of js, we can still write regular js code in a ts file
console.log('hello thieves')
//our first TS code
let age: number = 3;
console.log(age)
let firstName: string = 'yesenia'
let isAdmin: boolean = true
//the any tyoe: not best practice youll lose the benefit of static typing
let lastName: any = 'Sachs';
lastName =3;

//arrays: dynamic you can pass any data type
let students: string[] =['Sbaita, Jay, Tez, 2, true']

//another huge benefit:code completion

//tuples: typed array with a predefined length and types for each index
//Note: its best practice to restrict your tuples to only 2 values
let dog: [number, string] = [1, 'pitbull']

//CODE COMPLETION
    dog.push('dylan')
    console.log(dog)

//enums: special class that represents a group of constants

const small: number =1
const medium: number =2
const large: number =3