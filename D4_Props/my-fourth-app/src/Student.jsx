//propTyoes = a mechanism that ensures 
// that the passed value is the correct data type
//  age: PropTypes.number

import PropTypes from 'prop-types'

function Student({name="Example Student",age=0,isStudent=false}){

    return(
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "yes" : "no"}</p>
        </div>
    );

}



Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

export default Student