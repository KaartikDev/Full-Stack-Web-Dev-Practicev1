


//Show or hidecompenents based off some condition

import UserGreeting from "./UserGreeting"

function App() {

  return(

    <>
      {/* <UserGreeting isLoggedIn={true} username="KTDev"></UserGreeting> */}
      <UserGreeting isLoggedIn={false} ></UserGreeting>

    </>


  )
}

export default App
