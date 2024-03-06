import logo from './images/logo.png';
function call(){
    return(
        alert("You are calling...")
    )
}
function header(){
    return(
        <header className="App-header">
            <div className="top-bar container"> {/* top bar */} 
                <div className="col-50">  {/* top bar left */} 
                    <ul className="contacts">
                        <li className="phone">                        
                         <a href="tel:9851108896">
                        < i className="fa fa-phone" aria-hidden="true"></i> 9851108896</a>
                        </li>
                        <li className="email">                        
                         <a href="mailto:youremail@waituk.com">
                         <i className="fa fa-envelope-o" aria-hidden="true"></i> youremail@waituk.com</a>
                        </li>
                    </ul>
                </div> {/* end top bar left */} 
                <div className="col-50"> {/* top bar right */} 
                    <ul className="social-links">
                    <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                    <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                    <li><i className="fa fa-google-plus" aria-hidden="true"></i></li>
                    <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                    </ul>
                </div>{/* end top bar right */} 
            </div>  {/* top bar */} 
            <div className="nav-header">
                    <a href="http://localhost:3000" className="sitelink">
                    <img src={logo} alt="Logo" />
                    </a>
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
                </div>
        </header>
    );
}
export default header;