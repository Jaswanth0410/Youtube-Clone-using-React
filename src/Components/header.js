import React from "react";
import ReactDOM from "react-dom";
import './header.css'
function Header() {
    return(
    <div class="header">
        <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">SERVICES</a></li>
        <li><a href="#">PRODUCTS</a></li>
        <li><a href="#">CONTACT US</a></li>
        </ul>
    </div>
    );
}

ReactDOM.render(<Header />,document.getElementById("root"));

export default Header;