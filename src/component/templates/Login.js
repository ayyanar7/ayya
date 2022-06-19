import React from 'react'
import {authentication} from "./firebase-login-utils"
import { RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";
import {Container} from 'reactstrap';
class Login extends React.Component{
  state = {
   
    rememberMe: false
  };
  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : '';
    this.setState({ user, rememberMe });
    console.log("user: "+user);
    console.log("rememberMe: "+rememberMe);
  }

 handleChange = (event) =>{
   const {name, value} = event.target;
   this.setState({
     [name] : value
   }

   )
   console.log("REACT_APP_LOCAL_STORAGE_LOGIN : "+process.env.REACT_APP_LOCAL_STORAGE_LOGIN);
 }
 handleCBChange = (event) =>{

  const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.name]: value });
   
}
 
 configureCaptcha(){
    
   window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
     'size': 'invisible',
     'callback': (response) => {
       // reCAPTCHA solved, allow signInWithPhoneNumber.
       this.onSignInSubmit();
     }
   }, authentication);
   


 }
 onSignInSubmit =(e)=>{
   e.preventDefault();
   this.configureCaptcha();
   const phoneNumber = "+91"+this.state.mobile;
   console.log("phone no: "+phoneNumber)
   const appVerifier = window.recaptchaVerifier;
   signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
   .then(
     (confirmationResult) => {
       // SMS sent. Prompt user to type the code from the message, then sign the
       // user in with confirmationResult.confirm(code).
       window.confirmationResult = confirmationResult;
       // ...
     }).catch((error) => {
       console.error("error ocurred. "+error)
     });
   
       
 }

 verifyotp = (e) =>{
   const otp = this.state.otp;
   
   console.log("otp: "+otp);
  let confirmationResult =  window.confirmationResult;
   confirmationResult.confirm(otp).then((result) => {
     // User signed in successfully.
     const user = result.user;
     console.log("user: "+user);
     const {  rememberMe } = this.state;
     localStorage.setItem('rememberMe', rememberMe);
     localStorage.setItem('user', rememberMe ? user : '');
     console.log("stored rememberMe values : "+rememberMe);
     // ...
   }).catch((error) => {
     // User couldn't sign in (bad verification code?)
     // ...
     console.log("eroor: "+error);

   });
 }
  render(){
  
    return(
      <>
      
<div>
  <Container  className="bg-light text-dark center p-5"     fluid="sm">
 <h2>Login form</h2>
 <form onSubmit={this.onSignInSubmit}>
   <div id ='sign-in-button'></div>
   <label> Mobile number</label>
   <input type='number' name = 'mobile' placeholder='Mobile Number' required onChange={this.handleChange}/>
    <button type ='submit' > Generate</button>
 </form>
<br/>
 <form onSubmit={this.verifyotp}>
   <label>Enter OTP Recieved</label>
   <input type='number' name = 'otp' placeholder='OTP Number' required onChange={this.handleChange}/>
  
   <button type ='submit' > Submit</button>
 </form>
 <label>
        <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleCBChange} type="checkbox"/> Remember me
      </label>
 </Container>
</div>
</>
      
    )

    
  }
}

export default Login;