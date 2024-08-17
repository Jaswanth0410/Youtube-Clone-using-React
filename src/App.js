// import logo from './logo.svg';
// import React, { Component } from "react";
import './App.css';
import './index.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <br></br>
      <h1>TABLE</h1>
      <br></br>
      <table>
        
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Reg NO</th>
        </tr>
        <tbody>
          <tr>
            <td>Jaswanth</td>
            <td>K</td>
            <td>94</td>
          </tr>
          </tbody>
        <tbody>
          <tr>
            <td>Hesventh</td>
            <td>Kumar</td>
            <td>89</td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>Anand</td>
            <td>Yukesh</td>
            <td>66</td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>Agash</td>
            <td>A</td>
            <td>63</td>
          </tr>
          <tr>
            <td>Deepan</td>
            <td>C</td>
            <td>805</td>
          </tr>
          </tbody>
          
      </table>
      <form>
        <h1>FORM</h1>
        <br></br>
        <label for="username">Username :</label>
        <input type='text' placeholder='Enter your Username'></input>
        <br></br>    
        <br></br>    
        <label for="password">Password :</label>
        <input type='password' placeholder='Enter your Password'></input>
      </form>
      <br></br>
      </header>
      
    </div>
  );
}

// PRint name


// function Welcome(props) {
//   // return<h1>Hello my dear friend {props.name}</h1>
//   return{
  
//   }
// }

// class Welcome extends Component{
//   render(){
//     return <h1>Hello my dear friend Jaswanth{this.name}</h1>
//   }
// }
// export default Welcome;

// function Welcome(props){
//     return {
        
//     }
// }

export default App;