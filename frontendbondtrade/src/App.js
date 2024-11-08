import './App.css';
import { useState } from 'react';


function TextInput() {

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [NationalID, setNationalID] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNum, setPhoneNum] = useState('');
  

  const handdleInputchange = (event) => {
    setusername(event.target.value);

  }

  const handdleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
      firstname,
      lastname,
      NationalID,
      Email,
      PhoneNum
    };
    
    console.log("Form submitted",data);

  try {
    const fetchdata = fetch('http://localhost:50111/signupAccount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (fetchdata.ok) {
      console.log('Form submitted successfully');
    } else {
      console.error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }

  }

  return (
    <div className="container-header">
      <form onSubmit={handdleSubmit}>
        <div className="username-head">
          <h1>Username</h1>
          <input 
            type="text"
            value ={username}
            onChange={(e) => setusername(e.target.value)}/>
        </div>
        <div className="password-head">
          <h1>password</h1>
          <input 
            type="text"
            value ={password}
            onChange={(e) => setpassword(e.target.value)}/>
        </div>
        <div className="firstname-head">
          <h1>firstname</h1>
          <input 
            type="text"
            value ={firstname}
            onChange={(e) => setfirstname(e.target.value)}/>
        </div>
        <div className="lastname-head">
          <h1>lastname</h1>
          <input 
            type="text"
            value ={lastname}
            onChange={(e) => setlastname(e.target.value)}/>
        </div>
        <div className="National-head">
          <h1>National number</h1>
          <input 
            type="text"
            value ={NationalID}
            onChange={(e) => setNationalID(e.target.value)}/>
        </div>
        <div className="Email-head">
          <h1>Email</h1>
          <input 
            type="text"
            value ={Email}
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="Phonenum-head">
          <h1>Phone number</h1>
          <input 
            type="text"
            value ={PhoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}/>
        </div>
        <button type='sumit'>Submit</button>
      </form>
    </div>
  );
}

export default TextInput  ;
