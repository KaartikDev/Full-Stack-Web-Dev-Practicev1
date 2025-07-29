console.log("Hello World")

/*
Variables
let - can change
const - no changing ever
Do not use var
*/

const myVar = 250
console.log(myVar)
let secVar = 241
console.log(secVar)
secVar = 0
console.log(secVar)

const myString = "This is a string"
const myBool = true
const myNum = 33
const myArr = ["muk",333,false] //Arrays in JS can store multiple data types
const myUndef = undefined //Datatype is something that has not been defined yet
const bigInt = 111n // for large integers? investigate later
const myNull = null // null expliclty says it should be blank while undef is that hasnt inilized yet

const typeOfMyAge = (typeof myAge) // gives a string
// A power operation is **
// +,-.*,/

const friendsAge = [20, 19, 22, 21, 231]
const sum = friendsAge [0] + friendsAge [1] + friendsAge [2] + friendsAge [3] + friendsAge [4] 
console.log("Sum of friends age", sum)
const totalFriends = 5
console. log("total friends", totalFriends)
const average = sum / totalFriends
console. log("Average friend age", average)