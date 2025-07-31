//Want to take advatnage of fetch api from browser
//fetch(...) returns a "promise object"
//a promise is something that will be garunteed to resolve to defnitive value
const promiseObj = fetch('data.json') 

//You can nest promise objects by using .then 
// the returned value will what the promise resolves to

//.then, the response is the resolved value from fetch()
const nestedPromiseExample = promiseObj.then(response =>{
    //This happens first(#1)
    console.log(response)
    //need to extract the actual data from the fetched response
    //

    //this is scheduled for later(#3)
    const promiseObj2 = response.json()
    promiseObj2.then(data=>{
        console.log(data)
        return "Inner Nest"
    })

    //this is returned(#2)
    return "Outer Nest"

})

nestedPromiseExample.then(finalData=>{
    //this is resolved when otuer nest returned(#2)
    console.log(finalData)
})

//Finally #3 runs



//////
//Instead of nesting do chaining.
const promiseObj2 = fetch('data copy.json') 

const chainedPromiseExamples = promiseObj2.then(response => {
    const promiseObj2 = response.json()
    return promiseObj2
}).then(finalaData => console.log(finalaData))
