// // import logo from './logo.svg';
// import React, { useState } from "react";
// import './App.css';
// import './index.js'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       <br></br>
//       <h1>TABLE</h1>
//       <br></br>
//       <table>
        
//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Reg NO</th>
//         </tr>
//         <tbody>
//           <tr>
//             <td>Jaswanth</td>
//             <td>K</td>
//             <td>94</td>
//           </tr>
//           </tbody>
//         <tbody>
//           <tr>
//             <td>Hesventh</td>
//             <td>Kumar</td>
//             <td>89</td>
//           </tr>
//           </tbody>
//           <tbody>
//           <tr>
//             <td>Anand</td>
//             <td>Yukesh</td>
//             <td>66</td>
//           </tr>
//           </tbody>
//           <tbody>
//           <tr>
//             <td>Agash</td>
//             <td>A</td>
//             <td>63</td>
//           </tr>
//           <tr>
//             <td>Deepan</td>
//             <td>C</td>
//             <td>805</td>
//           </tr>
//           </tbody>
          
//       </table>
//       <form>
//         <h1>FORM</h1>
//         <br></br>
//         <label for="username">Username :</label>
//         <input type='text' placeholder='Enter your Username'></input>
//         <br></br>    
//         <br></br>    
//         <label for="password">Password :</label>
//         <input type='password' placeholder='Enter your Password'></input>
//       </form>
//       <br></br>
//       </header>
      
//     </div>
//   );
// }

// // PRint name


// // function Welcome(props) {
// //   // return<h1>Hello my dear friend {props.name}</h1>
// //   return{
  
// //   }
// // }

// // class Welcome extends Component{
// //   render(){
// //     return <h1>Hello my dear friend Jaswanth{this.name}</h1>
// //   }
// // }
// // export default Welcome;

// // function Welcome(props){
// //     return {
        
// //     }
// // }

// export default App;


// const EmployeeForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     birthDate: '',
//     gender: '',
//     jobPosition: '',
//     email: '',
//     phoneNumber: '',
//     startTime: '',
//     endTime: '',
//     teams: '',
//     designation: '',
//     billableHours: '',
//     isBillable: false,
//   });

//   const [formErrors, setFormErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const validateForm = () => {
//     let errors = {};
//     if (!formData.firstName) errors.firstName = 'First Name is required';
//     if (!formData.lastName) errors.lastName = 'Last Name is required';
//     if (!formData.birthDate) errors.birthDate = 'Date is required';
//     if (!formData.gender) errors.gender = 'Gender is required';
//     if (!formData.jobPosition) errors.jobPosition = 'Job Position is required';
//     if (!formData.email) errors.email = 'Email is required';
//     if (!formData.phoneNumber) errors.phoneNumber = 'Phone Number is required';
//     if (!formData.startTime) errors.startTime = 'Start Time is required';
//     if (!formData.endTime) errors.endTime = 'End Time is required';
//     if (!formData.teams) errors.teams = 'Team selection is required';
//     if (!formData.designation) errors.designation = 'Designation is required';
//     if (!formData.billableHours || formData.billableHours <= 0)
//       errors.billableHours = 'Billable Hours are required and must be a positive number';
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Form is valid, proceed with form submission logic
//       console.log('Form data submitted:', formData);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className={formErrors.firstName ? 'error' : ''}>
//         <label>First Name</label>
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//         {formErrors.firstName && (
//           <span style={{ color: 'red' }}>{formErrors.firstName}</span>
//         )}
//       </div>
//       <div>
//         <label>Middle Name</label>
//         <input
//           type="text"
//           name="middleName"
//           value={formData.middleName}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={formErrors.lastName ? 'error' : ''}>
//         <label>Last Name</label>
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//         {formErrors.lastName && (
//           <span style={{ color: 'red' }}>{formErrors.lastName}</span>
//         )}
//       </div>
//       <div className={formErrors.birthDate ? 'error' : ''}>
//         <label>Birth Date</label>
//         <input
//           type="date"
//           name="birthDate"
//           value={formData.birthDate}
//           onChange={handleChange}
//         />
//         {formErrors.birthDate && (
//           <span style={{ color: 'red' }}>{formErrors.birthDate}</span>
//         )}
//       </div>
//       <div className={formErrors.gender ? 'error' : ''}>
//         <label>Select Gender</label>
//         <select name="gender" value={formData.gender} onChange={handleChange}>
//           <option value="">--Select Gender--</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//         {formErrors.gender && (
//           <span style={{ color: 'red' }}>{formErrors.gender}</span>
//         )}
//       </div>
//       <div className={formErrors.jobPosition ? 'error' : ''}>
//         <label>Job Position</label>
//         <input
//           type="text"
//           name="jobPosition"
//           value={formData.jobPosition}
//           onChange={handleChange}
//         />
//         {formErrors.jobPosition && (
//           <span style={{ color: 'red' }}>{formErrors.jobPosition}</span>
//         )}
//       </div>
//       <div className={formErrors.email ? 'error' : ''}>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {formErrors.email && (
//           <span style={{ color: 'red' }}>{formErrors.email}</span>
//         )}
//       </div>
//       <div className={formErrors.phoneNumber ? 'error' : ''}>
//         <label>Phone Number</label>
//         <input
//           type="tel"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//         />
//         {formErrors.phoneNumber && (
//           <span style={{ color: 'red' }}>{formErrors.phoneNumber}</span>
//         )}
//       </div>
//       <div className={formErrors.startTime ? 'error' : ''}>
//         <label>Start Time</label>
//         <input
//           type="time"
//           name="startTime"
//           value={formData.startTime}
//           onChange={handleChange}
//         />
//         {formErrors.startTime && (
//           <span style={{ color: 'red' }}>{formErrors.startTime}</span>
//         )}
//       </div>
//       <div className={formErrors.endTime ? 'error' : ''}>
//         <label>End Time</label>
//         <input
//           type="time"
//           name="endTime"
//           value={formData.endTime}
//           onChange={handleChange}
//         />
//         {formErrors.endTime && (
//           <span style={{ color: 'red' }}>{formErrors.endTime}</span>
//         )}
//       </div>
//       <div className={formErrors.teams ? 'error' : ''}>
//         <label>Select Teams</label>
//         <select name="teams" value={formData.teams} onChange={handleChange}>
//           <option value="">--Select--</option>

// <option value="Team A">Team A</option>
//           <option value="Team B">Team B</option>
//         </select>
//         {formErrors.teams && (
//           <span style={{ color: 'red' }}>{formErrors.teams}</span>
//         )}
//       </div>
//       <div className={formErrors.designation ? 'error' : ''}>
//         <label>Select Designation</label>
//         <select
//           name="designation"
//           value={formData.designation}
//           onChange={handleChange}
//         >
//           <option value="">--Select--</option>
//           <option value="Developer">Developer</option>
//           <option value="Manager">Manager</option>
//         </select>
//         {formErrors.designation && (
//           <span style={{ color: 'red' }}>{formErrors.designation}</span>
//         )}
//       </div>
//       <div className={formErrors.billableHours ? 'error' : ''}>
//         <label>Billable Hours</label>
//         <input
//           type="number"
//           name="billableHours"
//           value={formData.billableHours}
//           onChange={handleChange}
//         />
//         {formErrors.billableHours && (
//           <span style={{ color: 'red' }}>{formErrors.billableHours}</span>
//         )}
//       </div>
//       <div>
//         <label>Is Billable</label>
//         <input
//           type="checkbox"
//           name="isBillable"
//           checked={formData.isBillable}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="full-width">
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default EmployeeForm;

// import React from 'react';
// import Apple from './apple.jpg';
// import Banana from './banana.jpg';
// import Orange from './orange.jpg';
// import Grapes from './grapes.jpg';
// import Mango from './mango.jpg';
// import Blueberry from './blueberry.jpg';
// import Kiwi from './kiwi.jpg';
// import Strawberry from './strawberry.jpg';
// import Watermelon from './watermelon.jpg';
// import Pineapple from './pineapple.jpg';
// import Peach from './peach.jpg';
// import Papaya from './papaya.jpg';
// import './App.css'


// const initialState = { count: 0 };


// function Welcome(state, action) {
//   switch (action.category) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count > 0 ? state.count - 1 : 0 }; // Ensure no negative count
//     case 'reset':
//       return { count: 0 };
//     default:
//       throw new Error();
//   }
// }

// const cardData = [
//   { id: 1, title: 'Apple', rate: 120, imgSrc: Apple },
//   { id: 2, title: 'Banana', rate: 80, imgSrc: Banana },
//   { id: 3, title: 'Orange', rate: 100, imgSrc: Orange },
//   { id: 4, title: 'Grapes', rate: 140, imgSrc: Grapes },
//   { id: 5, title: 'Mango', rate: 150, imgSrc: Mango },
//   { id: 6, title: 'Pineapple', rate: 90, imgSrc: Pineapple },
//   { id: 7, title: 'Strawberry', rate: 200, imgSrc: Strawberry },
//   { id: 8, title: 'Blueberry', rate: 250, imgSrc: Blueberry },
//   { id: 9, title: 'Watermelon', rate: 50, imgSrc: Watermelon },
//   { id: 10, title: 'Papaya', rate: 70, imgSrc: Papaya },
//   { id: 11, title: 'Kiwi', rate: 180, imgSrc: Kiwi },
//   { id: 12, title: 'Peach', rate: 160, imgSrc: Peach },
// ];

// const Shop = () => {
//   return (
//     <div className="container">
//       <h1 className="text-center">PazhaMudhir Nilayam</h1>

//       <div className="row">
//         {cardData.map((card) => (
//           <div className="col-md-4 mb-4" key={card.id}>
//             <ProductCard card={card} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const ProductCard = ({ card }) => {
//   const [state, dispatch] = React.useReducer(Welcome, initialState);

//   return (
//     <div className="card">
//       <img src={card.imgSrc} alt={card.title} className="card-img-top" />
//       <div className="card-body">
//         <h5 className="card-title">{card.title}</h5>
//         <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//       </div>
//       <ul className="list-group list-group-flush">
//         <li className="list-group-item">An item</li>
//         <li className="list-group-item">
//           <button onClick={() => dispatch({ category: 'increment' })}>+</button>
//           <input type="text" value={state.count} className="w-25 mx-3 text-center" readOnly />
//           <button onClick={() => dispatch({ category: 'decrement' })}>-</button>
//         </li>
//         <li className="list-group-item">
//           <b>Rate:</b> ₹{card.rate}/Kg
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Shop;
