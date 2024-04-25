
import React,{useState} from 'react'
import "./styles/header.css"
import "./styles/mobileHeader.css"
import {useNavigate}  from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faSearch} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn,faTwitter,faDiscord,faGithub,faTelegram,faYoutube, faFacebookF} from "@fortawesome/free-brands-svg-icons"
const Header = () => {

  const [isChecked,setIsChecked] = useState(false)
  const [dropdown,setDropdown] = useState(false)
  const tr = window.location.pathname;

   const [feedBack,setFeedBack]=useState("")
   const [feedBack1,setFeedBack1]=useState("")
   const navbarItem = [{link:"/courses",text:"Explore",name:"navbar1_link explore"},{link:"/ebook",text:"eBook",name:"navbar1_link"},{link:"/blog",text:"Blog",name:"navbar1_link"},{link:"/project",text:"projects",name:"navbar1_link"},{ link:"/",text:"pricing",name:"navbar1_link"}]
const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebookF,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{ icon:faGithub,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faDiscord,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]
    window.onscroll =()=>{
        scrollF()
      }
    

      const scrollF =()=>{
          if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setFeedBack('subCap')
              setFeedBack1('cap')
          }else{
            setFeedBack(' ')
              setFeedBack1(' ')
          }
      }

      const handleCheckboxChange = (event)=>{
   setIsChecked(event.target.checked)
   if(isChecked){
    document.body.classList.remove('cac')
   }else{
       document.body.classList.add('cac')
   }
      }

      const navigate = useNavigate()
  const pushMe = () =>{
    navigate("/register")
  } 
    
  return (

    <div >
    <div className={` "header" ${feedBack}`}>
      <div className="Navbar">

            <div style={{width:"20%"}}><a href="/" className="Brand">Marat</a></div>
            {(tr === "/register") || (tr === "/login") || (tr === "/forget-password") || (tr === "/update-password")  ? "":
            <div >
        <div className="nacBar">
           
          <ul className="NavbarUl" >
            <li><div href="" className="navbar1_link explore" onClick={()=>setDropdown(!dropdown)}>Explore</div>
            
          <ul className='navbarDropD'>

                  <li><a className="menuItem" href="/teach">Topic 1</a></li>
       <li><a className="menuItem" href="/teach1">Topic 2</a></li>
              <li><a className="menuItem" href="/teach2">Topic 3</a></li>
              <li>Still on development </li>
          </ul>
          
            </li>
             <li><a href="" className="navbar1_link linkAB">Courses</a></li>
              <li><a href="" className="navbar1_link linkAB">Projects</a></li>
              <li ><a href="" className="navbar1_link linkAB">Authorship</a></li>
               <li ><a href="/" className="navbar1_link linkAB">Affiliate</a></li>
                <li><a href="/blog" className="navbar1_link linkAB" style={{color:feedBack1}}>Blog</a></li>
        
          </ul>
          
        </div>
        </div>
        }

        {(tr === "/register") || (tr === "/login") || (tr === "/forget-password") || (tr === "/update-password") ? "" :
        <div style={{width:"15%"}}>
          <div className="hamburgerMenu">
    <input id="menuToggle" type="checkbox"  checked={isChecked}  onChange={handleCheckboxChange}/>
    <label className="menuBtn" for="menuToggle">
      <span></span>
    </label>
     <div className="menuBox">
    <ul className="menuBox24">
       <li className='Molop'><button className='loginButton'><a className="menuItem34" href="/register">Login/SignUp</a></button></li>
      {/* <li><a className="menuItem" href="/">Login/SignUp</a></li> */}
       <li className='Molop'><a className="menuItem" href="/">Explore</a></li>
              <li className='Molop'><a className="menuItem " href="/">Courses</a></li>
      <li className='Molop'><a className="menuItem " href="/">Projects</a></li>
      <li className='Molop'><a className="menuItem" href="/">Affiliate</a></li>
      <li className='Molop'><a className="menuItem" href="/">Authorship</a></li>
      <li className='Molop'><a className="menuItem" href="/">Blog</a></li>
      <li>
        <div className='UpMeTop'>
           <div className="hot">
                {socialLink.map((app,id)=>(
                <ul key={id} className="hot">
                    <li> <div className=''><a href={app.link} target="_blank" className="footerIconDivL"><FontAwesomeIcon icon={app.icon}  className="iconHoverColor " style={{fontSize:"15px"}} /></a></div></li>
                </ul>
                ))}
                </div>
        </div>
      </li>
    </ul>
   
    </div>
  </div>
           <ul className="NavbarUl">
           {/* <li><FontAwesomeIcon icon={faSearch}  className=""/> Search</li>  */}
           {/* <li><button className='NowB'>ON</button></li> */}
           <li> <div className='logInB' onClick={pushMe}>
            {/* <a href="/register" className="navbar1_link ling">Log In</a> */}
            log In
            </div></li>
           {/* <li><a href="/register" className="navbar1_link ">Join for free <FontAwesomeIcon icon={faArrowRight}  className=""/></a></li> */}
           </ul>
        </div>
        }
      </div>


     
         

    </div>

    </div>
  )
}

export default Header