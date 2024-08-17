import React from 'react';
import ReactDOM from 'react-dom';
import { useState,useEffect } from 'react';
// import './index.css';
// import App from './App.js'
// import Header from './Components/header.js'
// import Footer from './Components/footer.js'
// import './App.js';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// class demo{
//   methodone(){
//     var a =10;
//     var b =10;
//     var c = a + b;
//     document.getElementById("root").innerHTML= c;
//   }
// }

// var demoone = new demo();
// demoone.methodone;

// var a = () =>{
//   var a = 50;
//   var b= 20;
//   var c = a + b;
//   document.getElementById("root").innerHTML = c;
// };
// a(); // undefined
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// var a = () => {
//   var n = 66;
//   if(n === 66)
//     document.getElementById("root").innerHTML = n;
// };
// a();

// function Header() {
//   return (
//     <div>
//       <h2>I am Jaswanth</h2>
//       <h3>Welcome To my WebPage!!</h3>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <div>
//       <h2>My Foot</h2>
//       <h3>End To my WebPage!!</h3>
//     </div>
//   );
// }

// function NewWebsite() {
//   return (
//     <div>
//       <h1>Hello Friends</h1>
//     </div>
//   );
// }

// function MyDemoWebsite() {
//   return (
//     <div>
//       <Header />
//       <NewWebsite />
//       <Footer />
//     </div>
//   );
// }

// class MyWebsite extends React.Component{
//   render(){
//     return <h1 style={{color:"blue",textAlign:"center",border:"1px solid",fontWeight:900,fontSize:"100px"}} >This is Jaswanth</h1>
//   }
// }


// ReactDOM.render(<MyWebsite/>,document.getElementById("root"));
// ReactDOM.render(<MyDemoWebsite />,document.getElementById("root"));


// const websitestyle= {
//   color : "red",
//   backgroundColor:"yellow",
//   textAlign : "center"
// };

// step -1
// class Reactstate extends React.Component{
//   constructor(){
//     super();
//       this.state = {MyWebsite : "Vannakan Da Mapla",Mycontent:"This is Jaswanth"};
//     }
  
//     // step -3
//     changevalue=()=>{
//       this.setState({MyWebsite : "welcome to my new page"})
//     }

//     // step -2
//     render(){
//       return(
//       <div>
//         <h1>{this.state.MyWebsite},{this.state.Mycontent}</h1>
//         <button type='button' onClick={this.changevalue}>Change The Content</button>
//       </div> 
//       );
//     }
//   }

// ReactDOM.render(<Reactstate />,document.getElementById("root"));


// // React props

// class Reactprops extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Vanakkam {this.props.Mywebsite}</h1>
//         </div>
//     );
//   }
// }

// ReactDOM.render(<Reactprops Mywebsite="Nanba !!"/>,document.getElementById("root"));

// // React Lists

// const Mywebsite = ["Home","Aboutus","Services","Products","ContactUs"];
// const websitemenu = Mywebsite.map((Mywebsite) =>{
//   return<h1>{Mywebsite}</h1>
// }
// );

// ReactDOM.render(<ul>{websitemenu}</ul>,document.getElementById("root"))


// class Reacteventhandling extends React.Component{
//   constructor(){
//     super();
//     this.state={content:"Welcome to my website"}
//   }
//   changetheValue = ()=>{
//     this.setState({content:"Full Stack Developer"});
//   }

//   render(){
//     return(
//       <div>
//         <h1>{this.state.content}</h1>
//         <button onMouseOver={this.changetheValue}>Click Here</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Reacteventhandling />,document.getElementById("root"));

// function Welcome(){
//   return(
//   <div>
//     <Header />
//     <App />
//     <Footer />
//   </div>
//   );
// }

// ReactDOM.render(<div><Welcome /></div>,document.getElementById("root"));

function ExampleRender(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        
    setTimeout(() =>{
        setCount(count =>count+1)
    },1000)
}
);

return(
    <h1>LOVE You {count} times</h1>
)
}

ReactDOM.render(<ExampleRender />,document.getElementById("root"));


// function Userdemo(){
//     const [users,setUser] = useState();
//     const [loading.setLoading] = useState[0];
// }

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))