import React, {useState} from 'react'
import "./styles/contact.css"
import axios from "axios"
import validator from 'validator';


const Contact = () => {
    const [error,setError]=useState("")
     const [messages,setMessages]=useState("")
  const [inputs,setInputs] = useState({
    firstName:"",
    lastName:"",
    email:"",
    message:""
  })


   const changeHandle =(e)=>{

    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    console.log(inputs)
  }


   const postInfo =(e)=>{
e.preventDefault()
    if((inputs.firstName.length === 0) || (inputs.lastName.length === 0) || (inputs.email.length === 0) || (inputs.message.length === 0) ){
      setError("field must not be empty")
       setTimeout(()=>{
           setError("")
        },3000)
    }else
     if(validator.isEmail(inputs.email) === false){
setError("invalid Email")
 setTimeout(()=>{
           setError("")
        },3000)
    }else{

      axios.post("https://maratproject.onrender.com/api/post/form",inputs).then((response)=>{
        // axios.post("http://localhost:8080/api/post/form",inputs).then((response)=>{
        setMessages("Your message was sent successfully, and a response will be given to you in no less than 24 hours.")
         document.body.classList.add("sucMac");
        setTimeout(()=>{
           setMessages("")
           setInputs({
            firstName:"",
            lastName:"",
            email:"",
             message:""
           })
            document.body.classList.remove("sucMac");
          
        },8000)
      }).catch((err)=>{
      //  console.log(err)
       setError("Internal Server error")
         document.body.classList.add("sucMac");
       setTimeout(()=>{
           setError("")
             setInputs({
            firstName:"",
            lastName:"",
            email:"",
             message:""
           })
           
             document.body.classList.remove("sucMac");
        },3000)
      })
    } 
  }

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
                           <div><input type="text" name="firstName" value={inputs.firstName} className='inputsFormC' placeholder=" Enter first name"  onChange={changeHandle}/></div>
                            </div>
                             <div>
                            <label className='labelC'>Last Name</label>
                            <div><input type="text" placeholder="Enter last name" className='inputsFormC'  name="lastName" value={inputs.lastName}  onChange={changeHandle}/></div>
                           
                            </div>
                         <div>
                            <label className='labelC'>Your Email</label>
                             <div><input type="email" className='inputsFormC' placeholder="Enter your Email" name="email" value={inputs.email}  onChange={changeHandle}/></div>

                            </div>
       
                            <div>
                                <label className='labelC'>Message</label>
                                <textarea className='inputsFormC textAreaH ' placeholder='type ur message here' name="message" value={inputs.message}  onChange={changeHandle}>

                                </textarea>
                            </div>
                            <div><button className='MButton' onClick={postInfo}>Send Message</button></div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>


     {messages && 
<div className="successM">
     <div className="sucMac1">
      <div className="sucMac2">
          {messages}
      </div>
     </div>
     </div>
      }


          {error && 
<div className="successM">
     <div className="sucMac1">
      <div className="sucMac2">
          {error}
      </div>
     </div>
     </div>
      }
    </div>
  )
}

export default Contact