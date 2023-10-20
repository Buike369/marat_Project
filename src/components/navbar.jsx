
import React,{useState} from 'react'
import "./styles/header.css"
import "./styles/mobileHeader.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faSearch} from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const [isChecked,setIsChecked] = useState(false)
  const tr = window.location.pathname;

   const [feedBack,setFeedBack]=useState("")
   const navbarItem = [{link:"/courses",text:"Courses"},{link:"/ebook",text:"eBook"},{link:"/blog",text:"Blog"},{link:"/project",text:"projects"},{ link:"/",text:"pricing"}]

    window.onscroll =()=>{
        scrollF()
      }

      const scrollF =()=>{
          if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setFeedBack('subCap')
          }else{
            setFeedBack(' ')
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

      
    
  return (

    <div >
    <div className={` "header" ${feedBack}`}>
      <div className="Navbar">

            <div style={{width:"20%"}}><a href="/" className="Brand">Marat</a></div>
            {(tr === "/register") || (tr === "/login") || (tr === "/forget-password") || (tr === "/update-password")  ? "":
            <div style={{width:"40%"}}>
        <div className="nacBar">
            {navbarItem.map((app,id)=>(
          <ul className="NavbarUl" >
            <li  key={id}><a href={app.link} className="navbar1_link">{app.text}</a></li>
    
          </ul>
          ))}
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
      <li><a className="menuItem" href="/courses">Course</a></li>
      <li><a className="menuItem" href="/ebook">eBook</a></li>
      <li><a className="menuItem" href="/blog">Blog</a></li>
      <li><a className="menuItem" href="/project">Projects</a></li>
      <li><a className="menuItem" href="/">Pricing</a></li>
       <li><button className='loginButton'><a className="menuItem34" href="/register">Log In</a></button></li>
    </ul>
    </div>
  </div>
           <ul className="NavbarUl">
           {/* <li><FontAwesomeIcon icon={faSearch}  className=""/> Search</li>  */}
           {/* <li><button className='NowB'>ON</button></li> */}
           <li><a href="/register" className="navbar1_link">Log In</a></li>
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