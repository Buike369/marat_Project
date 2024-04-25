import React from 'react'
import "./styles/register.css"
import Navbar from "./navbar"

const Register = () => {
 const tr = window.location.pathname;

  return (
    <div>

 <Navbar/>
      <div  className='registerDiv'>
        {/* <div className='registerDiv1'><img src="" alt="" className=""/></div> */}
        <div className='registerDiv1'>
         
            <div className='regFormDiv'>
              <form className='regForm'>
                 <div>
                   <div className='RegCreate'>Create an Account</div>
                   <div className='regLabel'><label className='labelDD'>Full Name</label></div>
                   <div><input type="text"  className="RegInputs"/></div>
                    <div className='regLabel'><label className='labelDD'>Email</label></div>
                   <div><input type=""  className="RegInputs"/></div>
                    <div className='regLabel'><label className='labelDD'>Password</label></div>
                   <div><input type=""  className="RegInputs"/></div>
                   <div className='regCheck'><input type="checkbox" placeholder='password' className=""/><p className="iHave">I have read and agree to our <a href="/terms" className="iHave clickMe1">Terms</a> and <a href="/privacy-policy"  className="iHave clickMe1">Privacy Policy</a>.</p></div>
                   <div className='SignUp'>Sign Up </div>
                   <div className='divLine'>
                      <div className='line1 line'></div>
                      <div className="iHave line line2">or register with</div>
                      <div className='line1 line'></div>
                   </div>
                   <div className='kiln'>
                   <div className='SignUp goggle'>Google</div>
                   <div className='SignUp goggle facebook'>Facebook</div>
                   </div>
                   <div  className="iHave Al">Already have an account? <a href="/login" className='clickMe iHave'>Login</a></div>
                 </div>
              </form>
            </div>
        </div>

         <div className='registerDiv1'>
          <div className='registerDiv2 imgFieldD'>
          <img src="/img/figo.svg" alt="" className="imgFieldD23"/>
          </div>
          </div>
      </div>

     
 <div className='silentDiv'></div>
    </div>
  )
}

export default Register