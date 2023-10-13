import React from 'react'
import "./styles/term.css"
import "./styles/about.css"

const Terms = () => {
  return (
    <div className='typeT'>
    <div className='typ'>
       <div className='imgHid imgHid1'><img src="/img/terms1.svg" alt=""  className='abImg1'/></div> 
       <div className='imgHid imgHid2'><img src="/img/terms1.svg" alt=""  className='abImg1'/></div> 
       {/* <div className=''><img src="/img/terms.svg" alt=""  className='abImg2'/></div>
       <div className=''><img src="/img/terms.svg" alt=""  className='abImg3'/></div> */}
        <div className='termsPage'>

        <p className='termsPage1'>Terms Conditions</p>
        <p className='termPa'><span>1. </span>Acceptance of Terms</p>
        <p className='Pa'>Welcome to Marat Technology! By using our website creation services, including the development of websites for individuals and businesses, as well as project-based websites such as ecommerce, booking apps, and stores, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
        <p className='termPa'>
           <span>2. </span> Services Offered 
        </p>
        <p className='Pa'>
           Marat Technology offers website creation services tailored to your needs, including: 
        </p>
        <div>
            <p className='Pa textIdent'><span>a. </span>Website design and development for individuals and businesses.</p>
            <p className='Pa textIdent'> <span>b. </span>Project-specific website development, such as ecommerce, mobile apps, and store websites etc.</p>
            <p className='Pa textIdent'><span>c. </span>Sale and distribution of related courses and project websites to support your business.</p>
        </div>
        <p className='termPa'><span>3. </span> User Content</p>
        <p className='Pa'>You are solely responsible for any content you provide, including text, images, graphics, and other materials used in the websites created by Marat Technology. You guarantee that you have the necessary rights and permissions to use and provide such content. Marat Technology reserves the right to refuse or remove any content that violates our content guidelines or applicable laws.</p>
        <p className='OurService termPa'><span>4. </span> Intellectual Property</p>
        <p className='Pa'>All intellectual property rights related to the websites created by Marat Technology, including design elements, code, and other proprietary materials, shall remain the property of Marat Technology unless otherwise agreed upon. You are granted a non-exclusive, non-transferable license to use the website for its intended purpose.</p>
        <p className='termPa'> <span>5. </span>Payment and Refunds</p>
        <p className='Pa'>Payment terms and pricing for Marat Technology's services are outlined on our website. Payments are due according to the agreed-upon schedule. No refunds will be provided after work has commenced unless explicitly agreed upon in writing. In case of project cancellation, fees for completed work and costs incurred will be billed accordingly.</p>
        <p className='termPa'><span>6. </span> Course and Project Website Purchase</p>
        <p className='Pa'>For course and project website purchases, you agree to abide by any additional terms and conditions presented during the purchase process. Access to courses and project websites may be subject to licensing and usage restrictions</p>
        <p className='termPa'><span>7. </span> Confidentiality</p>
        <p className='Pa'>Marat Technology acknowledges that you may share sensitive information during the course of our engagement. We will not disclose this information to third parties without your consent, except as required by law or to provide the services.</p>
        <p className='termPa'><span>8. </span> Limitation of Liability</p>
        <p className='Pa'>Marat Technology shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from the use of our services, including but not limited to loss of data, profits, or business interruption. You agree to indemnify and hold Marat Technology harmless from any claims arising from your use of our services.</p>
        <p className='termPa'> <span>9. </span>Termination</p>
        <p className='Pa'>Either party may terminate the engagement at any time with written notice. Upon termination, you agree to pay for any work completed up to the termination date.</p>
        <p className=' termPa'><span>10. </span> Modifications</p>
        <p className='Pa'>Marat Technology reserves the right to modify, suspend, or discontinue any aspect of our services at any time without notice. We also reserve the right to update these Terms and Conditions. Continued use of our services after any modifications constitutes your acceptance of the revised terms.</p>
        <p className='termPa'><span>11. </span> Governing Law</p>
        <p className='Pa'>These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles</p>
        <p className='Pa'>By using Marat Technology's services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you have any questions or concerns, please contact us at [contact email].</p>
        </div>

    </div>
    </div>
  )
}

export default Terms