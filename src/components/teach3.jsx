import React,{useState} from 'react'
import "./styles/teach.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Footer from "./footer"


const Teach3 = () => {
 
 const [sectionChange,setSectionChange] = useState("tips")
    const  tipDetails = [{name:"Tips",value:"2,633"},{name:"Wins",value:"1,740"},{name:"Profit",value:"+575.06"},{name:"Draw",value:"99"},{name:"Win Rate",value:"66%"},{name:"ROI",value:"21.8%"}]

 const card = ["sport","binary","forex","crytptocurrency","sport","binary","forex","crytptocurrency"]
 const [tipsLevel,setTipsLever] = useState("ActiveTips")

 const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date = `  ${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;

  return (
    <div className='lookUp'>
<div className='ParentDivNewHod'>
  

 
  <div style={{padding:"6px 8px"}}>
        <div className='profileCoverDiv'>
            <div className='BkPfo'>
                <div className="bkTopicH">Where do I deploy my  mobile frontend i.e react-native  to server  or app store</div>
            </div>

            <div className='holder7'> 
                <div className='holder2'>
                    <div className="point">
                        <img src="/img/bkPics.jpeg" alt="" className="ImgPicMan"/>
                         <img src="/img/picManImg.png" alt="" className="ImgPicMan1"/>
                    </div>
                    <div className='kingManU'>
                        <div className='AmosD78'>
                            <p className='namePad'>Kingsley C<span>.</span></p>
                    
                        </div>
                         <div className='AmosD78'>
                            <p className='holder5 tem1'>Software Developer</p>
                            <p className='tem'>{date }</p>
                         </div>
                     
                    </div>
                </div>
               
            </div>

   <div className="brif"> We help you discover the potential of your ideas, projects,or business and shine online with our software developer's effective solutions | let's build. Java,javascript,python,SQL,nodejs,react and react-native. .</div>
           
          
        </div>
        </div>
 {/* section for tips */}

  
</div>

   <div>
        <div className='termsPage tem3'>
      <p className='termsPage1'>The deployment of a React Native mobile app</p>
      <p className='Pa'>The deployment of a React Native mobile app frontend involves a different process compared to deploying the backend</p>
      <p className='termPa'><span>1. </span>App Store Deployment:</p>
      <p className='Pa'>The React Native mobile app frontend is deployed to the respective app stores.</p>
       
      
        <div>
            <p className='Pa textIdent'><span>a. </span>Apple App Store: For iOS devices</p>
            <p className='Pa textIdent'> <span>b. </span>Google Play Store: For Android devices</p>
            
        </div>
       <p  className='Pa'>This is how users download and install your mobile app on their devices. App store deployment involves submitting your app to the store, where it undergoes a review process, and, once approved, becomes available for users to download.</p>
      <p className='termPa'><span>2. </span>Digital Ocean (or Other Cloud Providers):</p>
      <p  className='Pa'>Digital Ocean and similar cloud providers are typically used for deploying the backend of your mobile app (server-side). This is where your server, APIs, databases, and other backend components reside.</p>
       <p  className='Pa'>The frontend of a React Native app doesn't need to be deployed to a cloud server like Digital Ocean. Instead, you compile your React Native code into a bundle that includes JavaScript, assets, and other necessary files. This bundle is packaged within the mobile app binary (APK for Android or IPA for iOS) during the app store deployment.</p>
     
      <p className='termPa'> In summary</p>
      <p className='Pa'>Backend (Server): Deploy to cloud providers like Digital Ocean.</p>
       <p className='Pa'>Frontend (React Native App): Deploy to app stores (Apple App Store and Google Play Store).</p>
       <p className='Pa'>Remember, the backend and frontend communicate through APIs, but they are distinct parts of the architecture, and they have separate deployment processes.</p>

       <p className='Pa farm'>For your dream web and Android app, reach out to us through the 'Contact Us' link in the footer. We're here to create a responsive and attractive website or app tailored to your needs and business goals. Let's bring your vision to life!.</p>
      
      
      
      </div>

    </div>

         

                
            </div>
  )
}

export default Teach3