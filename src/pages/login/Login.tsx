import React, { useState } from 'react'
import './Login.css'
function Login() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
     <section className={isActive ? "wrapper active": "wrapper"}>
      <div className="form signup">
        <header onClick={()=>setIsActive(false)} >Register</header>
        <form action="#">
          <input type="text" placeholder="Full name" required />
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
         

          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label htmlFor="signupCheck">I accept all terms & conditions</label>
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>

      <div className="form login">
        <header onClick={()=>setIsActive(true)}>Login</header>
        <form action="#">
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
      </div>


    </section>
    </div>
  )
}

export default Login