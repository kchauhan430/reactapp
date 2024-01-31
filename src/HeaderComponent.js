function call(){
    return(
        alert("You are calling...")
    )
}
function header(){
    return(
        <header className="App-header">
            <div className="top-bar"> {/* top bar */} 
                <div className="col-50">  {/* top bar left */} 
                    <div className="col-50">
                        <div className="phone">                        
                            <a href="tel:9851108896">
                            <i class="fa fa-phone" aria-hidden="true"></i> 9851108896</a>
                        </div>
                    </div>
                    <div className="col-50">
                    <div className="email">                        
                        <a href="mailto:youremail@waituk.com">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i> youremail@waituk.com</a>
                    </div>
                    </div>
                </div> {/* end top bar left */} 
                <div className="col-50"> {/* top bar right */} 
                    <div className="col-50">
                    </div>
                    <div className="col-50">
                    </div>
                </div>{/* end top bar right */} 
            </div>  {/* top bar */} 
            <a href="http://localhost:3000" className="sitelink"><h2>ReactJS app</h2></a>
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
                        <a href="#">Blog</a>
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