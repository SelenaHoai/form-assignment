import { useState } from  'react';
    
    
const UserForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstnameError] = useState();
    const [lastNameError, setLastnameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);
    const [confirmPasswordError, setConfirmPasswordError] = useState(true);

    const validateFirstname = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 2) {
            setFirstnameError("First name must be at least 2 characters.")
        } else if (e.target.value.length < 1) {
            setFirstnameError("First name is required!")
        } else {
            setFirstnameError("")
        }
    }

    const validateLastname = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 2) {
            setLastnameError("Last name must be at least 2 characters.")
        } else if (e.target.value.length < 1) {
            setLastnameError("Last name is required!")
        } else {
            setLastnameError("")
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters.")
        } else if (e.target.value.length < 1) {
            setEmailError("Email is required!")
        } else {
            setEmailError("")
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters.")
        } else if (e.target.value.length < 1) {
            setPasswordError("Password is required!")
        } else {
            setPasswordError("")
        }
    }

    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 8) {
            setConfirmPasswordError("Password must be at least 8 characters.")
        } else if (e.target.value < 1) {
            setConfirmPasswordError("Password is required!")
        } else if (e.target.value !== password){
            setConfirmPasswordError("Passwords must match!")
        } else {
            setConfirmPasswordError("")
        }
    }
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };

    return(
        <div className="align-center">
            <form onSubmit={ createUser }>
                {
                    confirmpassword ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }
                <div className="form-input">
                    <label>First Name: </label> 
                    <input type="text" onChange={ validateFirstname} />
                </div>
                {
                    firstNameError ?
                    <p>{firstNameError}</p> :
                    ""
                }
                <div className="form-input">
                    <label>Last Name: </label> 
                    <input type="text" onChange={ validateLastname} />
                </div>
                {
                    lastNameError ?
                    <p>{lastNameError}</p> :
                    ""
                }
                <div className="form-input">
                    <label>Email: </label> 
                    <input type="text" onChange={ validateEmail} />
                </div>
                {
                    emailError ?
                    <p>{emailError}</p> :
                    ""
                }
                <div className="form-input">
                    <label>Password: </label>
                    <input type="password" onChange={ validatePassword} />
                </div>
                {
                    passwordError ?
                    <p>{passwordError}</p> :
                    ""
                }
                <div className="form-input">
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ validateConfirmPassword} />
                </div>
                {
                    confirmPasswordError ?
                    <p>{confirmPasswordError}</p> :
                    ""
                }
                <div>
                    <input type="submit" value="Create User" id="submit-button" />
                </div>
            </form>
            <div className="show-data-form">
                <p>Your Form Data</p>
                <div className="show-data">
                    <p>First Name: {firstname}</p>
                    <p>Last Name: {lastname}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmpassword}</p>
                </div>
            </div>
        </div>
    );
};
    
export default UserForm;
