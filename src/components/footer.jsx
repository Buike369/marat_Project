import React, {useState} from 'react'
import "./styles/footer.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios"
import validator from 'validator';
import Testimony from './testimony';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin,faTwitter,faGithub,faTelegram,faYoutube,faFacebook} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
     const [inputs,setInputs] = useState({
    email:""
  })
      const [error,setError]=useState("")
     const [messages,setMessages]=useState("")

   const changeHandle4 =(e)=>{

    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  
  }
 const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebook,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{ icon:faGithub,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faLinkedin,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faTelegram,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]

   const postInfo1 =(e)=>{
e.preventDefault()
    if( inputs.email.length === 0 ){
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

      axios.post("http://localhost:8080/api/post/form1",inputs).then((response)=>{
        // axios.post("http://localhost:8080/api/post/form",inputs).then((response)=>{
        setMessages("Sent Successfully")
         document.body.classList.add("sucMac");
        setTimeout(()=>{
           setMessages("")
           setInputs({
            email:""
           })
            document.body.classList.remove("sucMac");
          
        },5000)
      }).catch((err)=>{
      //  console.log(err)
       setError("Internal Server error")
        document.body.classList.add("sucMac");

         setTimeout(()=>{
           setError("")
          
            document.body.classList.remove("sucMac");
          
        },5000)
      })

    } 
  }




  return (
    <div>


{/* <div className ="yiv3">
         <div className='yiv'>
          <div className='TheyAre'>They are talking about us</div>
          <div className='DonTake'>Don't Take Our Word For It.</div>
          <div className='seeWhat'>See what our customers have to say.Find out what our clients are saying below</div>
         <div className=" marginMu fadama ">
         <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive2}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  
>
 <div style={{padding:"4px 10px"}}>      
<div className="earnSayPp">
  <p className="partnerShip">"Through marat affiliate program I made 50k in just three  weeks by referring 20friends to the platform."</p>
  <div className="favourPath">
    <div><img src="/img/mara.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Chukwubuike Amogu</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div> 
 <div style={{padding:"4px 10px"}}>           
<div className="earnSayPp">
  <p className="partnerShip">"I purchased a course from Marat Technology, and it's packed with valuable content that greatly enhances my professional skills."</p>
  <div className="favourPath">
    <div><img src="/img/mara.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Amaka Ngozi</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
<div style={{padding:"4px 10px"}}>
<div className="earnSayPp">
  <p className="partnerShip">"Thanks to Marat Technology's P2P project collaboration, I've not only enhanced my skills but also successfully developed outstanding projects, leading to substantial earnings."</p>
  <div className="favourPath">
    <div><img src="/img/mara.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Amaka Amogu</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
         
          </Carousel>
        </div>
        </div>
        </div> */}
        <Testimony/>


        <div className='footerHouse'></div>
        <div className="footerBackgroundColor">
            <div className='padG'>
            <div  className='subEmail'>
                <p className='misOut'>Don't miss out on Fantastic News</p>
                <p className='misOut1'>Subscribe to our newsletter and be the first to receive news.</p>
                <form className='FormPP'>
                    <div>
                        <input type="email" placeholder='Enter your Email' className='yourEmail' name="email" value={inputs.email} onChange={changeHandle4}/>
                        <FontAwesomeIcon icon={faPaperPlane}  className="HomeV" style={{fontSize:"20px"}} onClick={postInfo1}/>
                    </div>
                </form>
                 <img src="/img/news.svg" alt=""  className="messageImg"/>
            </div>
            </div>

        <div>
            <div className='footerW'>
               
                <div className=''>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Products</div></li>
                        <li className='pin pin6'><a href="/courses" className='then'>Courses</a></li>
                        <li className='pin pin7'><a href="/project" className='then'>Projects</a></li>
                        <li className='pin  pin6'><a href="/ebook" className='then'>eBooks</a></li>
                        <li className='pin  pin7'><a href="#" className='then'>MBT</a></li>
                        <li className='pin1  pin6'><a href="#" className='then'>Assessments</a></li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">About Us</div></li>
                        <li className='pin pin6'><a href="#" className='then'>Our Team</a></li>
                        <li className='pin pin7'><a href="/about" className='then'>About</a></li>
                        <li className='pin  pin6'><a href="/contact" className='then'>Contact Us</a></li>
                        <li className='pin  pin7'><a href="#" className='then'>Careers</a></li>
                        <li className='pin1  pin6'><a href="#" className='then'>Press</a></li>
                    </ul>
                </div>
                <div className=''>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Legal</div></li>
                        <li className='pin pin6'><a href="/privacy" className='then'>Privacy Policy</a></li>
                        <li className='pin pin7'><a href="/terms" className='then'>Terms & Conditions</a></li>
                        <li className='pin  pin6'><a href="#" className='then'>Cookie Policy</a></li>
                        <li className='pin  pin7'><a href="#" className='then'>Disclaimer</a></li>
                      
                    </ul>
                </div>
                <div className=''>
                    <ul className='footerF'>
                        <li className='pin pin7'><div className="FooterHead">Resources</div></li>
                        <li className='pin pin6'><a href="/blog" className='then'>Blog</a></li>
                        <li className='pin pin7'><a href="#" className='then'>Become an Author</a></li>
                        <li className='pin  pin6'><a href="#" className='then'>Become an Affiliate</a></li>
                        <li className='pin  pin7'><a href="/pricing" className='then'>Pricing</a></li>
                        <li className='pin1  pin6'><a href="/privacy" className='then'></a></li>
                    </ul>
                </div>
            </div>
        </div>
         <div className='MobileT12'>
            <div className='MobileT1'>
                <div className='MobileT'>
                    <div className="R1">About Us</div>
                    <a href="/about" className='mnm mmm2'>About</a>
                    <a href="/contact" className='mnm mmm2'> Contact Us </a>
                    <a href="#" className='mnm mmm2'>Careers</a>
                     <a href="#" className='mnm mmm2'>Press</a>
                </div>
                <div className='MobileT'>
                    <div className="R1 R2">Products</div>
                    <a href="/courses" className='mnm mmm1 '> Courses</a>
                    <a href="/project" className='mnm mmm1'>Projects</a>
                    <a href="/ebook" className='mnm mmm1'>eBooks</a>
                    <a href="#" className='mnm mmm1'>Assessments</a>
                </div>
            </div>
        </div>
         <div className='MobileT12'>
            <div className='MobileT1'>
                <div className='MobileT'>
                    <div className="R1">Legal</div>
                    <a href="/privacy" className='mnm mmm2'>Privacy Policy </a>
                    <a href="/terms" className='mnm mmm2'>Terms & Conditions</a>
                    <a href="#" className='mnm mmm2'>Disclaimer</a>
                                        <a href="#" className='mnm mmm2'>Cookie Policy</a>
                </div>
                <div className='MobileT'>
                    <div className="R1 R2">Resources</div>
                    <a href="/blog" className='mnm mmm1 '>Blog</a>
                    <a href="#" className='mnm mmm1'>Become an Author</a>
                    <a href="#" className='mnm mmm1'>Become an Affiliate</a>
                    <a href="/pricing" className='mnm mmm1'>Pricing</a>
                </div>
            </div>
        </div>
        <div className='boy'>
        <div className='footerMainDiv'>
          
            <div className='footerName' >
                © 2023 Marat-B Technology . All Rights Reserved
            </div>
            <div style={{width:"20%"}}>
                <div className="hot">
                {socialLink.map((app,id)=>(
                <ul key={id} className="hot">
                    <li><a href={app.link} target="_blank"><FontAwesomeIcon icon={app.icon}  className="iconHoverColor" style={{fontSize:"20px"}} /></a></li>
                </ul>
                ))}
                </div>
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

export default Footer