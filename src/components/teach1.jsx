import React,{useState} from 'react'
import "./styles/teach.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Footer from "./footer"


const Teach1 = () => {
 
 const [sectionChange,setSectionChange] = useState("tips")
    const  tipDetails = [{name:"Tips",value:"2,633"},{name:"Wins",value:"1,740"},{name:"Profit",value:"+575.06"},{name:"Draw",value:"99"},{name:"Win Rate",value:"66%"},{name:"ROI",value:"21.8%"}]

 const card = ["sport","binary","forex","crytptocurrency","sport","binary","forex","crytptocurrency"]
 const [tipsLevel,setTipsLever] = useState("ActiveTips")


  return (
    <div className='lookUp'>
<div className='ParentDivNewHod'>
  

 
  <div style={{padding:"6px 8px"}}>
        <div className='profileCoverDiv'>
            <div className='BkPfo'>
                <div className="bkTopicH">5 Best Tools For Digital Marketing</div>
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
                            <p className='tem'>October 26, 2023.</p>
                         </div>
                     
                    </div>
                </div>
               
            </div>

   <div className="brif"> We help you discover the potential of your ideas, projects,or business and shine online with our software developer's effective solutions | let's build. Java,javascript,python,SQL,nodejs,react and reactive. .</div>
           
          
        </div>
        </div>
 {/* section for tips */}

  
</div>

   <div>
        <div className='termsPage tem3'>
      <p className='termsPage1'>5 Best Tools For Digital Marketing</p>
      <p className='Pa'>The best tools for your digital marketing will depend on your strategy,budgets and objectives,however it is essential to choose the ones that align with your goals and provide the features you need, below are the 5 best suggestion for you to start with:</p>
      <p className='termPa'><span>1. </span> Google Analytics</p>
      <p className='Pa'>This free tool provides you with in-depth insights into your websites's performance, helps you track user behaviour,measure conversions, and optimize your online presence.</p>
      <p className='termPa'><span>2. </span>Mailchimp</p>
      <p  className='Pa'>An email marketing platform that allows you to create, send, and track emails campaigns,making it easy to engage with your audience.</p>
      <p className='termPa'><span>3. </span> HubSpot</p>
      <p className='Pa'>This all-in-one inbound marketing platform that offers tools for content creation,social media management,email marketing, and customer relationship management(CRM).</p>
      <p className='termPa'><span>4. </span>Hootsuite</p>
      <p  className='Pa'>For social media management,Hootsuite allows you to schedule posts, monitor social conversations, and analyze your social media performance across multiple platforms. </p>
      <p className='termPa'><span>5. </span>SEMrush</p>
      <p  className='Pa'>A comprehensive SEO and SEM tool that helps you with keyword research,competitive analysis, and tracking your website's search engine rankings.</p>
     
      <p className='termPa'> Finally</p>
      <p className='Pa'>By utilizing these tools, you can effectively drive traffic and increase sales for your business across various social platforms.</p>
      
      
      </div>

    </div>

         

                
            </div>
  )
}

export default Teach1