import React from 'react'
import "./styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin,faTwitter,faGithub,faTelegram,faYoutube,faFacebook} from "@fortawesome/free-brands-svg-icons"

const footer = () => {
 const socialLink = [{icon:faTwitter,link:"https://x.com/ChukwubuikeK?t=Ksk86TowzZrQ7X_21swBIg&s=09"},{icon:faFacebook,link:"https://www.facebook.com/profile.php?id=100070000591981&mibextid=ZbWKwL"},{icon:faYoutube,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{ icon:faGithub,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faLinkedin,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"},{icon:faTelegram,link:"https://www.linkedin.com/in/chukwubuike-kingsley-1a6054224"}]

  return (
    <div>
        <div className='footerHouse'></div>
        <div className="footerBackgroundColor">
            <div className='padG'>
            <div  className='subEmail'>
                <p className='misOut'>Don't miss out on Fantastic News</p>
                <p className='misOut1'>Subscribe to our newsletter and be the first to receive news</p>
                <form className='FormPP'>
                    <div>
                        <input type="" placeholder='Enter your Email' className='yourEmail'/>
                        <FontAwesomeIcon icon={faPaperPlane}  className="HomeV" style={{fontSize:"20px"}}/>
                    </div>
                </form>
            </div>
            </div>

        <div>
            <div className='footerW'>
                <div className='logoFooter'><a href="/">Marat</a></div>
                <div className='piki'>
                    <ul className='footerF'>
                        <li className='pin pin7'><a href="/" className='then'> Home</a></li>
                        <li className='pin pin6'><a href="/about" className='then'>About</a></li>
                        <li className='pin pin7'><a href="#" className='then'>Support</a></li>
                        <li className='pin  pin6'><a href="/contact" className='then'>Contact</a></li>
                        <li className='pin  pin7'><a href="/terms" className='then'>Terms of Service</a></li>
                        <li className='pin1  pin6'><a href="/privacy" className='then'>Privacy</a></li>
                    </ul>
                </div>
            </div>
        </div>
         <div className='MobileT12'>
            <div className='MobileT1'>
                <div className='MobileT'>
                    <a href="/" className='mnm'> Home </a>
                    <a href="/contact" className='mnm'> Contact </a>
                    <a href="#" className='mnm'> Support </a>
                </div>
                <div className='MobileT'>
                    <a href="/about" className='mnm'> About Us</a>
                    <a href="/terms" className='mnm'> Terms of Service</a>
                    <a href="/privacy" className='mnm'> Privacy</a>
                </div>
            </div>
        </div>
        <div className='boy'>
        <div className='footerMainDiv'>
          
            <div className='footerName' >
                © 2023 Marat Technology Projects. All Rights Reserved
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
    </div>
  )
}

export default footer