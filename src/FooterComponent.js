import logodark from './logodark.png';

function footer(){
    return(
        <footer id="section" className="App-footer"> 
            <div className="nav-footer">
                    <a href="http://localhost:3000" className="sitelink">
                    <img src={logodark} alt="Logo" />
                    </a>
                    <nav>
                        <ul className="navigation">
                            <li>
                                <a href="#">Company</a>
                            </li>
                            <li>
                                <a href="#">Sevices</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                              <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                    <ul className="social-links">
                    <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                    <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                    <li><i className="fa fa-google-plus" aria-hidden="true"></i></li>
                    <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                    </ul>
                </div>
            <div className="bottom-bar">Copyright@2024 ReactJS. All rights reserved.</div>
        </footer>
    );
} 
export default footer;