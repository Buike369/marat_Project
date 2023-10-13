import React from 'react'
import "./styles/login.css"
import "./styles/forgetPassword.css"
import Navbar from "./navbar"

const  ForgetPassword = () => {
  return (
    <div>
      <Navbar/>

      <div  className='registerDiv loginDivM forget'>
        {/* <div className='registerDiv1'><img src="" alt="" className=""/></div> */}
        <div className='registerDiv1'>
         
            <div className='regFormDiv'>
              <form className='regForm'>
                 <div>
                   <div className='RegCreate'>Email Address</div>
                    <div className='regLabel'><label className='labelDD'>Email</label></div>
                   <div><input type="" placeholder='email' className="RegInputs"/></div>
                    
                   <div className='SignUp loginB'>Login </div>
                 
                 
                 </div>
              </form>
            </div>
        </div>

         <div className='registerDiv1'>
          <div className='registerDiv2 imgFieldD'>
          <div className='ManD'><img src="/img/happy.svg" alt="" className="imgFieldD24"/></div>
          </div>
          </div>
      </div>

    </div>
  )
}

export default ForgetPassword