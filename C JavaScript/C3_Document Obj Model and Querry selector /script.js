// How to let JS mess with the HTML
// JS doesnt do it, chrome/browser has another API set that lets it do it
// called the document object

console.log(document)

// A Document Object Model(DOM) is programtic representation of a HTML in a tree format
// Lets CSS run speedily

//JS can maniuplate the DOM :)

//Querry selector
// Input paramter needs to be the same as CSS selectors
const heading = document.querySelector('h1')
heading.innerText = "Hello KT"
console.log(heading)

//Here only the first point taken cuz queryselector just goes until a match found(unlink css where all hit)
const firstp = document.querySelector('ul li')
//An array of all the nodes via querryselectoradd
const allListPoints = document.querySelectorAll('ul li')

console.log(allListPoints)

for(let i = 0; i<allListPoints.length;i++){
    const listItem = allListPoints[i]
    listItem.innerText = 'I am the edited list item'
}


//get element id
const para1 = document.querySelector('#para')
const para2 = document.getElementById('para')
//Get element by id is a hash map O(1)
para2.innerText = "CHANGED"


//Can do query slector on JS variable
const ul = document.querySelector('ul')
const li = ul.querySelectorAll('li')

console.log(ul)
console.log(li)