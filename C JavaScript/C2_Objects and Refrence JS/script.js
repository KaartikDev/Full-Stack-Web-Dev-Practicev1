console.log("hello world")


// Object is everything(function, arrays, etc)


const myObj = {
    'key1' : 'v1',
    'key2' : 'v2',
    //Can even have object for object
    'key3' : {subkey1:"subval1",subkey2:"subval2"}
}

console.log(myObj)
console.log("Value at Key1 is", myObj["key1"])
// can also do myObj.key2


const person1 = {
    name: "Big guy",
    age: 92
}

const person2 = {
    name: "lil guy",
    age: 19
}
//OBJECTS ARE PASSED BY REFRENCE(passes in aderess)
function mutate(obj){
    console.log(obj.age)
        
}
//Primitives IS PASSED BY VALUE
function primitiveMutate(thing){
    thing++
    console.log(thing)
}

mutate(person1)
//NUM IS PASSED BY VALUE
let num = 100
primitiveMutate(100)
console.log(num)


//SCOPING
function x(){

    const hello = 'HI'
    console.log(hello)
}
x()
//console.log(hello) breakes cuz hello not in scope


//Varuable shadowing
const myAge = 22
function printAge(){
    //Local variables makes it impossible to get to global var, just initlizing can shadow
    const myAge = 25
    console.log(myAge)
}
printAge() //prints 25



