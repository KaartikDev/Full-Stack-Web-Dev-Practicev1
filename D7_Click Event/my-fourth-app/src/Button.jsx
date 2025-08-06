function Button(){


    let count = 0;
    // e is for event object provided by onClick handler
    const handleClick = (e) => e.target.textContent = "OUCH!"
    return(
        // arrow function passes handleclick by refrence
        <button onClick={(e) => handleClick(e)}>CLICK ME</button>
        // on double click also exists
    );
}

export default Button