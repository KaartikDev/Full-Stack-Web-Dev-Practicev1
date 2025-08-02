
//Making a compnent

function Header(){
    //inside func can return pure HTML, only one element but children ok
    return(
        <header>
            <h1> Hello World</h1>
            {/* Navigation element */}
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            {/* Horizontal rule element */}
            <hr></hr>
        </header>

    )
}

//for exporting this
export default Header