import React,{useState} from 'react'
import "./styles/teach.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import Footer from "./footer"


const Teach2 = () => {
 
 const [sectionChange,setSectionChange] = useState("tips")
    const  tipDetails = [{name:"Tips",value:"2,633"},{name:"Wins",value:"1,740"},{name:"Profit",value:"+575.06"},{name:"Draw",value:"99"},{name:"Win Rate",value:"66%"},{name:"ROI",value:"21.8%"}]

 const card = ["sport","binary","forex","crytptocurrency","sport","binary","forex","crytptocurrency"]
 const [tipsLevel,setTipsLever] = useState("ActiveTips")

const code = `az webapp deployment source config-local-git --name <app_name> --resource-group <resource_group>
git remote add azure <git_url>
git push azure master`;

const code1 = `az login`;

const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const date = `  ${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
  return (
    <div className='lookUp'>
<div className='ParentDivNewHod'>
  

 
  <div style={{padding:"6px 8px"}}>
        <div className='profileCoverDiv'>
            <div className='BkPfo'>
                <div className="bkTopicH"> Deploy Nodejs To Azure Web App</div>
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
                            <p className='tem'>{date}.</p>
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
      <p className='termsPage1'>How to deploy a Nodejs application to an Azure Web App</p>
      <p className='Pa'>To deploy a Nodejs application to an Azure Web App,you can follow this steps:</p>
      <p className='termPa'><span>1. </span> Create an Azure Account</p>
      <p className='Pa'>If you don't have  an Account,you can create one at https://azure.com. You may need to provide payment information, but Azure offers a free tier for certain services. </p>
      <p className='termPa'><span>2. </span>Install Azure CLI</p>
      <p  className='Pa'>Install the Azure Command-Line Interface (Azure CLI) on your local machine.You can download it from the Azure websites.</p>
      <p className='termPa'><span>3. </span>Create a Nodejs Application</p>
      <p className='Pa'>Develop your Nodejs application if you haven't already. Make sure your project includes a 'package.json' file that defines your project's dependencies</p>
      <p className='termPa'><span>4. </span>Initialize a Git Repository</p>
      <p  className='Pa'>initialize a Git repository in your Nodejs project if you haven't already. This is essential for deploying your application to Azure </p>
      <p className='termPa'><span>5. </span>Login  to Azure</p>
     
      <p  className='Pa'>Use the Azure CLI to log in to your Azure account eg. az login.</p>
        <div className="WeLom">
        <div className="WeLom2">bash</div>
         <pre className="Wecole66">
        <code>{code1}</code>
      </pre>
      </div>
       <p className='termPa'><span>6. </span>Create an Azure Web App</p>
      <p  className='Pa'>Create  a Web App in Azure that wil host your nodejs application.You can do this via the Azure CLI or the Azure Portal.</p>
       <p className='termPa'><span>7. </span>Configure Azure Web App Settings</p>
      <p  className='Pa'>You will need a to configure the settings for your Azure Web App. This includes setting the nodejs version ,configuring the nodejs environment variables, and specifying the deployment source (usually from your Git repository).</p>
      <p className='termPa'><span>8. </span>Deploy Your Applications</p>
      <p  className='Pa'>You can deploy your Nodejs application to Azure Web App using Git.Azure DevOps,Github Actions,or other deployment methods.
          
      </p>
      <div className="WeLom">
        <div className="WeLom1">bash</div>
         <pre className="Wecole67">
        <code>{code}</code>
      </pre>
      </div>
      <p className='termPa'><span>9. </span>Monitor Deployment</p>
      <p  className='Pa'>Monitor the deployment process for any errors or issues. You can check the deployment logs from  the Azure Portal or by using the Azure CLI.</p>
      <p className='termPa'><span>10. </span>Test Deployment</p>
      <p  className='Pa'>Once the deployment is successful,you should be able to access your Nodejs application by visiting the Azure Web App URL.</p>
     
     
     
      <p className='termPa'> Finally</p>
      <p className='Pa'>Remember to replace {`<app_name>`} and  {`<resource_group>`}  with your own values. This is a high-level overview, and specific details may vary depending on your project and requirements. Azure provides various tools and services for continuous integration and deployment (CI/CD) to streamline the deployment process, so you might want to explore those options as well.</p>
      
      
      </div>

    </div>

         

                
            </div>
  )
}

export default Teach2