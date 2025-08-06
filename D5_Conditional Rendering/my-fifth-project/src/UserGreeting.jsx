
import PropTypes from 'prop-types'


function UserGreeting({isLoggedIn=false, username="testUser"}){
    
    if(isLoggedIn){
        return(<h2 className="welcome-message">Weclome {username}</h2>);
    } else {
        return(<h2 className="login-message">Log in Nerd</h2>);
    }
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.bool
}


export default UserGreeting