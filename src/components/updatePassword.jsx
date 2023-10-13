import React from 'react'
import "./styles/login.css"
import "./styles/forgetPassword.css"
import Navbar from "./navbar"

const  UpdatePassword = () => {
  return (
    <div>
      <Navbar/>

      <div  className='registerDiv loginDivM forget'>
        {/* <div className='registerDiv1'><img src="" alt="" className=""/></div> */}
        <div className='registerDiv1'>
         
            <div className='regFormDiv'>
              <form className='regForm'>
                 <div>
                   <div className='RegCreate'>Update Password</div>
                   
                   <div className='regLabel'><label className='labelDD'>New password</label></div>
                   <div><input type="password" placeholder='password' className="RegInputs"/></div>
                   <div className='regLabel'><label className='labelDD'>Confirm Password</label></div>
                   <div><input type="password" placeholder='confirm password' className="RegInputs"/></div>
                    
                   <div className='SignUp loginB'>update </div>
                 
                 
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

export default UpdatePassword