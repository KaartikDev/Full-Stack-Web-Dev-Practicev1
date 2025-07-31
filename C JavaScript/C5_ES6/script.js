// ES6 / ES2015

//ARRAY DESTRUCTING
const arr1 = [1,2,3]
const arr2 = [-1,5,6]
const arr3 = [...arr1,...arr2]
console.log(arr3)


const obj1 = {
    name: 'kt'
}

const obj2 = {
    name: 'guy',
    age: 1000
}


//MOST RECENT KEY-VALUE OVERWRITES(name from obj 2 saved)
const obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3)


//ES6 Function declarations:


//Normal, can be called anywehre even above
function exampleFunc(){
    return 1
}

//ES6, NOTES: can only call after these are declared
const ExampleFunc2 = (arg1,arg2,arg3) => {
    return 2
}
//Squaring func(notice syntax)
const ExampleFunc3 = arg => arg**2

//Array functions

//normal
for(let i=0;i<arr1.length;i++){
    const el = arr1[i]
}
//.map --> creates a new array without mutating older one by applying func each el
const newMappedArray = arr1.map(function(element){
    console.log(element)
    return 100
})

//.filter --> gives array on which function only returns true
const filteredArr = arr1.filter(element => element<2)
//filteredArr = [1]
console.log(filteredArr)

//.find --> returns element
const findX = arr1.find(num => num === 3)
console.log(findX)

//foreach --> no return 
arr1.forEach(num => console.log(num**2))

//tempalte literals 
//Before
const myString1 = "THis is me.\
\
\
\
I can finally pause"

//Now
const myString2 = `This is me.


Wow no back slaches needed B)`

//injecting stuff from object into string dynamically
const person = {
    name: "kt",
    age: 19
}
//old
const aboutMe = 'My name is ' + person.name + 'and i am something old'
//new
const aboutMev2 =   `My name is ${person.name} and i am something old`