// props = read only propeerties that u can share bwteen compmnets. 
// parent compoennet sends info to child
// <Component key=value />


import Student from "./Student.jsx"


function App() {
  return(
    <>
      <Student name="Gort" age={19} isStudent={true}></Student>
      <Student name="Man" age={129} isStudent={false}></Student>
      <Student name="Dino" age={450} isStudent={false}></Student>
      <Student></Student>

    </>
  )
}

export default App
