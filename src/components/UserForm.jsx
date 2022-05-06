import { useState } from  'react';
    
    
const UserForm = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <div className="align-center">
            <form onSubmit={ createUser }>
                <div className="form-input">
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
                </div>
                <div className="form-input">
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div className="form-input">
                    <label>Email: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className="form-input">
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className="form-input">
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
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
