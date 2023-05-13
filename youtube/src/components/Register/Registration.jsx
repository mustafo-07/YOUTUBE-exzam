import { useState } from "react";
import { Link } from "react-router-dom";
import {BsYoutube} from 'react-icons/bs'
import '../Register/Registration.css'
import { createUserWithEmailAndPassword } from "firebase/auth";

// import firebase from "../../firebase.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("!Please enter all information");
      return;
    }

    if (password.length < 6) {
      setError("!Password must be at least 6 characters long");
    }

    if (password !== confirmPassword) {
      setError("!Password not verified");
      return;
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error);
    }
  };
	
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};
  	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};
  return (
    <div className="register mt-10">
      
 				<form className='Register mt-10'>
         <h2 className="register__title text-6xl"><BsYoutube className='logotip'/>Register</h2>
				
				<label className="label">Email</label>
				<input onChange={handleEmail} className="input"
				value={email} type="email" />
				
				<label className="label">Password</label>
				<input onChange={handlePassword} className="input"
				value={password} type="password" />
				
				<button onClick={handleSubmit} className="btn" type="submit">
				Submit
				</button>
				<div className="register__box-one mt-6">
        <p>
          <Link to={"/login"} className="text-teal-400">
            Log in
          </Link>{" "}
          if you are registered
        </p>
      </div>
				</form>
      <div className="messages">
			</div>
    </div>
  );
};

export default Register;