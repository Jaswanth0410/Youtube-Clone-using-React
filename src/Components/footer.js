import React from "react";
import ReactDOM from 'react-dom';
import './footer.css'
function Footer(){
    return(
   <div>
    <h1>&copy; This is Created by Me</h1> 
   </div>
    );
}

ReactDOM.render(<Footer />,document.getElementById("root"));

export default Footer;