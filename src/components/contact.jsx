import React from 'react'
import "./styles/contact.css"


const Contact = () => {
  return (
    <div className='typ4'>
    <div className='typ'>
        <div ><img src="/img/contact.svg" alt=""  className='abImg'/></div>
        <div  className='conT'>
        <p className='usContact'>Contact Us</p>
        <div className='formDivC'>
            <p className='getInTouch'>Get in Touch</p>
            <p className='getInTouch1'>Please fill in this form, and we'd love to hear from you! We will get back to you as soon as possible.</p>
            <div>
                <form>
                    <div>
                        <div>
                            <label className='labelC'>First Name</label>
                           <div><input type="text" className='inputsFormC' placeholder=" Enter first name" /></div>
                            </div>
                             <div>
                            <label className='labelC'>Last Name</label>
                            <div><input type="text" placeholder="Enter last name" className='inputsFormC'/></div>
                           
                            </div>
                         <div>
                            <label className='labelC'>Your Email</label>
                             <div><input type="email" className='inputsFormC' placeholder="Enter your Email"/></div>

                            </div>
                            <div>
                                <label className='labelC'>Message</label>
                                <textarea className='inputsFormC textAreaH ' placeholder='type ur message here'>

                                </textarea>
                            </div>
                            <div><button className='MButton'>Send Message</button></div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact