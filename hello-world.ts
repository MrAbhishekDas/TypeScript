//arrow function syntax
var fn = () => 'response';

//Equivalent code
/*
var fn = function () {
    return 'response';
}*/

//TS syntax so that the variable assigned will be number and not any other type 
//Also known as TS declaration and Transpiling to the JS and
//helps to reduce the error during the development
var a: number;
var b: boolean;
var c: string;

a = 10;
//This throws error in TS since we assigning boolean to a
//a = true; 
//BUT above works fine in the javascript

//Array
//lets we want it should contain only number in TS
var myArr : number[];
// var myArr = [1,2,3]; //in JS

myArr = [1,2]; //Here we only have number and inserting anything apart from number will throw error
// myArr.push('a');//Throws error

//As in JS array we can have any type of primitive data but not in TS

//Function

//JS would not throw error but throws in TS

// function add(a, b) {
//     return a;
// }

function add(a:number, b: number) {
    return a + b;
}
//To achieve the extra flexibility TS uses arguments? for the optional arguments
//But is has to be always at the end

function addWithOptionalParameter(a:number, b: number, c?: number, d = 0) {
    return a + b + c + d;
}

//Here is d is 0 i.e. it is a default value if nothing is provided and becomes optional too
//Here c is optional but if passed it should be a number

//The function can also have return type
function addWithReturnType(a:number, b: number, c?: number, d = 0): number {
    return a + b + c + d;
}







