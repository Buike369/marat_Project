import React ,{useState}from 'react'
import "./styles/home.css"
import "./styles/home2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'
import Navbar from "./navbar"
const Home2 = () => {

 const card =[ {name:"Chukwubuike k",img:"/img/bgf.svg", course:"Figma To React",time:"Oct 1, 2023", button:"Preview" ,price:"Free",price1:"₦10,000"},{name:"Kingsley C.",img:"/img/bgf.svg",course:"React-Native Tutorials",time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Samuel P.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Paul C.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Joseph P.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Daniel M.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"}]
 const card2 =[ {name:"Kingsley C.",img:"john",project:"Portfolio Project", button:"Preview" ,price:"Free",price1:"₦50,000"},{name:"Kingsley C.",img:"john",project:"Gaming Projects", button:"Preview" ,price:"Free",price1:"₦120,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"}]
  const card1 =[ {name:"Matthew O.",img:"/img/gripa.png",course:"HTML/CSS", button:"Preview" ,price:"Free",price1:"₦15,000"},{name:"Philip E.",img:"/img/gripa3.png",course:"JavaScript",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Micheal K.",img:"/img/gripa4.png",course:"React",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Joy M.",img:"/img/gripa5.png",course:"Nodejs",button:"preview",price:"Free",price1:"₦30,000"},{name:"Francisca K.",img:"/img/gripa6.png",course:"MySql",button:'Preview',price:"Free",price1:"₦15,000"},{name:"Emmanuel J.",img:"/img/grip7.png",course:"Python",button:'Preview',price:"Free",price1:"₦25,000"}]
  return (
    <div>
      <div className="navbarMainDiv" >
       <div className="heroDiv">
         {/* <p className="ExploreJ">Empower everyone with  <span className='ExploreJ exploreC'>the superpower</span> of coding </p> */}
                  <p className="ExploreJ">SuperPower of coding</p>
        <div className="headerDivFle addHeaderDivFile">
           <div className="headerDivFle1">
             {/* <p className="Explore">Empower everyone with <span className='Explore exploreC'>the superpower</span> of coding</p> */}
              <p className="Explore">SuperPower of coding</p>
             <p className="Explore1">Explore courses on: Programming <span className='fra'>|</span> Websites building <span className='fra'>|</span> Projects <span className='fra'>|</span> Works</p>
            <div className='CoursesB'> <button className="Explore2">Explore Courses</button></div>
             <p className="Explore3">Join <span className="millionPP">1.7 Million</span> developers, students working in companies.</p>
            

           </div>
           <div className="headerDivFle2">
                 <div className='imgFileDiv'> <img src="/img/GroupM2.svg" alt="Ailt" className="headerDivFle21"/></div>
               
           </div>
        </div>

      </div>
            </div>

     <div className="mmvn1">
       <div className="mmvn">

        <div className="dereF">
      <div className="coding1">
        <div className="coding4">
        
          <div className="coding2">
             <div className="coding3">
              {/* <div className="Mywork">
                <div className="Mywork1"></div>
                 <div className="Mywork1"></div>
                  <div className="Mywork1"></div>
              </div> */}
               <div className="imgSrc1 kolo">
               <img src="/img/GroupA.svg" alt="" className="pap"/>
               </div>
             </div>
             <div className="coding3">
               <div>
               <p  className="hands"> BRAND'S GROWTH</p>
                 <div className="divUnderline"></div>
               <p className="hands1">Build Your Brand</p>
               <p className="hands2">We  empower your brand's growth through the synergy of innovative software solutions and creative ideas.</p>
             

                <div className="hands3">
                <div className="hands3s">
                  <div className='iconDivN'><FontAwesomeIcon icon={faCode}  className="iconDiv divLip"/></div>
                  <p className="hands4">Building your brand strengthens its identity and recognition in the market.</p>
                </div>
                <div className="hands5">
                <div className='iconDivN'><FontAwesomeIcon icon={faWandMagicSparkles}  className="iconDiv divLip"/></div>
                  <p className="hands4">A well-executed brand-building strategy fosters trust and loyalty among your customers.</p>
                </div>
              </div>
               </div>
             </div>
          </div>
        </div>
      </div>
      </div>

      <div className="dereF">
      <div className="coding1">
        <div className="coding4">
        
          <div className=" coding2 coding56">
            
             <div className="coding3">
               <div>
               <p  className="hands"> CREATIVE INNOVATION</p>
                 <div className="divUnderline"></div>
               <p className="hands1">Idea Create Innovation</p>
               <p className="hands2"> We unleash the future with our software driven innovation, where idea creation  knows no boundaries.</p>
             

                <div className="hands3">
                <div className="hands3s">
                  <div className='iconDivN'><FontAwesomeIcon icon={faCode}  className="iconDiv divLip"/></div>
                  <p className="hands4">Idea creation innovation is the driving force behind groundbreaking solutions and products.</p>
                </div>
                <div className="hands5">
                <div className='iconDivN'><FontAwesomeIcon icon={faWandMagicSparkles}  className="iconDiv divLip"/></div>
                  <p className="hands4">Innovation in  idea creation fuels progress and propels businesses into new horizons.</p>
                </div>
              </div>
               </div>
             </div>
              <div className="coding3">
                 {/* <div className=" Mywork2">
                <div className="Mywork1"></div>
                 <div className="Mywork1"></div>
                  <div className="Mywork1"></div>
              </div> */}
               <div className="imgSrc1  kolo">
               <img src="/img/GroupA.svg" alt="" className="pap"/>
               </div>
             </div>
          </div>
        </div>
      </div>
      </div>


        </div> 
        </div> 
     



      <div>

      </div>

 <div className="projectPreviewDiv1">
        <div className="tou">
        <div className="TrendingCourses">Popular Courses </div>
        <div className="MostPopular">
        <p className="Checkout">Check out the most popular courses from our expert authors. </p>
       <a href="/courses"> <div className="viewMoreButton">view more</div> </a>
        </div>
        </div>
   
        <div className="filesVideo">
          {card1.map((app,id)=>(
          <div className="cardDivWithImg" key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src={app.img} alt="" className="divImg"/></div>
              <p className='skillPath'>SKILL PATH</p>
            <p className="WhatIs">{app.course}</p>
             <p className="authorName1">by <span  className="authorName" >{app.name}</span></p>
         
          <div className="Jan janu">
              <p className="landL">{app.price} <span className='Numb'>{app.price1}</span></p>
              <p className="landL2">{app.button}</p>
            </div>

          </div>
          ))}
          
         
          
        
        </div>
      </div>

      <div className="BumbN gamaT">
    
    <div className="dereF">
      <div className="coding1">
        <div className="coding4">
        
          <div className="coding2  coding56">
             <div className="coding3">
               <div className="imgSrc1 gamat2">
               <img src="/img/GroupA.svg" alt="" className="pap"/>
               </div>
             </div>
             <div className="coding3">
               <div>
               <p  className="hands">Web and Android Projects </p>
                 <div className="divUnderline"></div>
               <p className="hands1 pooko">Projects For  Diverse Career and  Fields</p>
               <p className="hands2 pooko1">Our expertise extends to crafting bespoke web and Android projects across a  wide spectrum of careers and industries.</p>
             

                <div className="hands3">
                <div className="hands3s">
                  <div className='iconDivN'><FontAwesomeIcon icon={faCode}  className="iconDiv divLip"/></div>
                  <p className="hands4 pooko1">Our projects cater to a wide array of careers and fields, delivering solutions that meet your unique needs.</p>
                </div>
                <div className="hands5">
                <div className='iconDivN'><FontAwesomeIcon icon={faWandMagicSparkles}  className="iconDiv divLip"/></div>
                  <p className="hands4 pooko1">From technology to healthcare, we specialize in building projects that align with diverse career paths and industry  sectors.</p>
                </div>
              </div>
               </div>
             </div>
          </div>
        </div>
      </div>
      </div>

       <div className="dereF">
      <div className="coding1">
        <div className="coding4">
        
          <div className="coding2">
             
             <div className="coding3">
               <div>
               <p  className="hands">FASTER LEARNING</p>
                 <div className="divUnderline"></div>
               <p className="hands1 pooko">FAST LEARNING</p>
               <p className="hands2 pooko1">We empower aspiring programmers with the best, modern, and efficient coding methods for accelerated learning and mastery.</p>
             

                <div className="hands3">
                <div className="hands3s">
                  <div className='iconDivN'><FontAwesomeIcon icon={faCode}  className="iconDiv divLip"/></div>
                  <p className="hands4 pooko1">Our mission is to provide aspring programmers with the tools  and techniques to accelerate their learning and achieve coding mastery.</p>
                </div>
                <div className="hands5">
                <div className='iconDivN'><FontAwesomeIcon icon={faWandMagicSparkles}  className="iconDiv divLip"/></div>
                  <p className="hands4 pooko1">Through cutting-edge methods and experts guidance,we equip future programmers with the skills needed to excel in the modern coding landscape.</p>
                </div>
              </div>
               </div>
             </div>
               <div className="coding3">
               <div className="imgSrc1 gamat2">
               <img src="/img/GroupA.svg" alt="" className="pap"/>
               </div>
             </div>
          </div>
        </div>
      </div>
      </div>

      </div>

      


      
<div className="CNN"></div>
  
        <div className='lm'>
               <div  className='gift'>
            <p className="morPage">
              Explore More 
            </p>
             <p className="morPage2">
              On different projects and works 
            </p>

           <a href="/project"> <div className="morPage1">view all</div></a>
          </div>
          </div>
          <div className="filesVideo gg" style={{marginBottom:"20px"}}>
             <div className="cardDivWithImg ">
           <div className="ImgDivGenerator"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
           {/* <p className='skillPath'>PROJECT PATH</p> */}
            <p className="WhatIs">Ecommerce Project</p>
             {/* <p className="authorName1">by <span  className="authorName" >Amaka Emmanuel</span></p> */}
         
             <div className="Jan janu">
              <p className="landL">by <span className='authorName'>Amaka Emmanuel</span></p>
              <p className="landL2">Preview</p>
            </div>
           

          </div>
           <div className="cardDivWithImg ">
           <div className="ImgDivGenerator"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
              {/* <p className='skillPath'>PROJECT PATH</p> */}
            <p className="WhatIs">Simple Sales Store</p>
             {/* <p className="authorName1">by <span  className="authorName" >Chukwubuike K.</span></p> */}
         
            <div className="Jan janu">
              <p className="landL">by <span className='authorName'>David Stephen.</span></p>
              <p className="landL2">Preview</p>
            </div>
           

          </div>

        
          <div  className='gift lm1'>
            <p className="morPage">
              Explore More 
            </p>
             <p className="morPage2">
              On different projects and works 
            </p>

           <a href="/project"> <div className="morPage1">view all</div></a>
          </div>
          {card2.map((app,id)=>(
          <div className="cardDivWithImg" key={id}>
           <div className="ImgDivGenerator"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
           {/* <p className='skillPath'>PROJECT PATH</p> */}
            <p className="WhatIs">{app.project}</p>
             {/* <p className="authorName1">by <span  className="authorName" >{app.name}</span></p> */}
         
             <div className="Jan janu">
              <p className="landL">by <span className='authorName'>{app.name}</span></p>
              <p className="landL2">{app.button}</p>
            </div>

          </div>
          ))}
        
        </div>

    </div>
  )
}

export default Home2