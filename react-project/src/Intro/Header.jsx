//* it's best practice to write component name and function name same and exporting with that name

//! we can write only one elements inside return statement.

//! First letter of function name and file name must be in Capital

function Header(){
    return (
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <hr></hr>
            </nav>
        </header>
    )
}

export default Header