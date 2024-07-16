import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import { fetchLogin, fetchRegister } from '../../store/feature/authSlice';
import { SocialDispatch } from '../../store';
function Login() {
  const dispath: SocialDispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const register = ()=>{
      dispath(fetchRegister({
        userName,password,rePassword,email
      }));
  }

  const login = ()=>{
    dispath(fetchLogin({userName,password}));
  }
  return (
   
     <section className={isActive ? "wrapper active": "wrapper"}>
      <div className="form signup">
        <header onClick={()=>setIsActive(false)} >Register</header>
        <form action="#">
          <input type="text" onChange={evt=>setUserName(evt.target.value)} placeholder="Full name" required />
          <input type="text" onChange={evt=>setEmail(evt.target.value)}  placeholder="Email address" required />
          <input type="password" onChange={evt=>setPassword(evt.target.value)}  placeholder="Password" required />
          <input type="password" onChange={evt=>setRePassword(evt.target.value)}  placeholder="RePassword" required />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type='button' value="Signup" onClick={register} />
        </form>
      </div>

      <div className="form login">
        <header onClick={()=>setIsActive(true)}>Login</header>
        <form action="#">
          <input type="text" onChange={evt=>setUserName(evt.target.value)}  placeholder="userName" required />
          <input type="password" onChange={evt=>setPassword(evt.target.value)}  placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type='button' value="Login" onClick={login} />
        </form>
      </div>
     </section>
   
  )
}

export default Login