const incrBtn = document.querySelector("#increment")
const decBtn = document.querySelector("#decremet")
const counterEl = document.getElementById("counter")

const ulElement = document.getElementById("item_lister")


let counter = 0;




//WOW look at event listenrs
//the second arg is a "anonymous func(has no name)"
incrBtn.addEventListener('click',function() {
    counter++
    counterEl.innerHTML = counter
    console.log('Updated counter',counter)

    //create element
    const li = document.createElement('li')
    li.innerHTML = "<b>Bullet# </b>" + counter
    li.setAttribute('data-counter',counter)
    if (counter%2===0){
        li.setAttribute('class','yellow')
        //Can also diectly set style with JS directly
        li.style.border = '2px solid black'
    } else {
        li.setAttribute('class','red')
        li.style.border = '2px solid black'
    }
    console.log(counter, li.className);
    //Append element
    ulElement.appendChild(li)
})

decBtn.addEventListener('click',function() {

    //find li to delete

    if (counter > 0){
        const li = ulElement.querySelector('[data-counter="'+ counter +'" ]')
        li.remove()
        const number = parseInt(li.getAttribute('data-counter'),10)
        //can do stuff with number like only deleting even entries

    }


    //decrement
    counter--
    counterEl.innerHTML = counter
    console.log('Updated counter',counter)


    
})

