function call(){
    return(
        alert("You are calling...")
    )
}
function header(){
    return(
        <header className="App-header">
        <h2>ReactJS app</h2>
        <nav>
            <ul className="navigation">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Courses</a>
                </li>
                <li>
                    <a href="#">Sevices</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </nav>
        <button onClick={call}>Call Here</button>
        </header>
    );
}
export default header;