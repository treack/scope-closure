// variables
var a; //declarando
var b = 'b'; // declaracion y asignacion
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion 

//Global Scope
var fruit = 'Apple'; // global

function bestFuit(){
    console.log(fruit);
}
bestFuit();

function countries(){
    country = 'Colombia'; //global
    console.log(country);
}

countries();
console.log(country);