import React ,{useState,useEffect}from 'react'
import "./styles/home.css"
import "./styles/home2.css"
import Carousel from "react-multi-carousel";
import AOS from 'aos';
import "react-multi-carousel/lib/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faWandMagicSparkles,faStar} from '@fortawesome/free-solid-svg-icons'
import Navbar from "./navbar"

const Home2 = () => {

 const card =[ {name:"Chukwubuike k",img:"/img/bgf.svg", course:"Figma To React",time:"Oct 1, 2023", button:"Preview" ,price:"Free",price1:"₦10,000"},{name:"Kingsley C.",img:"/img/bgf.svg",course:"React-Native Tutorials",time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Samuel P.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Paul C.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Joseph P.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Daniel M.",img:"/img/bgf.svg",course:"React Tutorials", time:"Oct 1, 2023",button:"Preview",price:"Free",price1:"₦25,000"}]
 const card2 =[ {name:"Kingsley C.",img:"john",project:"Portfolio Project", button:"Preview" ,price:"Free",price1:"₦50,000"},{name:"Kingsley C.",img:"john",project:"Gaming Projects", button:"Preview" ,price:"Free",price1:"₦120,000"},{name:"kingsley C.",img:"john",project:"Investment Project", button:"Preview" ,price:"Free",price1:"₦150,000"}]
  const card1 =[ {name:"Matthew O.",img:"/img/gripa.png",course:"HTML/CSS", button:"Preview" ,price:"Free",price1:"₦15,000"},{name:"Philip E.",img:"/img/gripa3.png",course:"JavaScript",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Micheal K.",img:"/img/gripa4.png",course:"React",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Joy M.",img:"/img/gripa5.png",course:"Nodejs",button:"preview",price:"Free",price1:"₦30,000"},{name:"Francisca K.",img:"/img/gripa6.png",course:"MySql",button:'Preview',price:"Free",price1:"₦15,000"},{name:"Emmanuel J.",img:"/img/grip7.png",course:"Python",button:'Preview',price:"Free",price1:"₦25,000"}]

   const[courses,setCourses] =  useState("python")

  const [star,setStar] = useState(["star","star","star","star","star"])

       const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }


 useEffect(()=>{
    AOS.init({once: true});
     
  },[])
  return (
    <div>
      <div className="navbarMainDiv" >
        <div>
       <div className="heroDiv">
        
                  <p className="ExploreJ">Unlock The Future  Of Tech</p>
        <div className="headerDivFle addHeaderDivFile">
           <div className="headerDivFle1">
          <img src="/img/ppp.svg" alt="" className='blogh1' />
           
             <div className='rteb'>
              <p className="Explore">Unlock The Future  Of Tech</p>
             <p className="Explore1">Explore courses on: Programming <span className='fra'>|</span> Websites building <span className='fra'>|</span> Projects <span className='fra'>|</span> Works</p>
            <div className='CoursesB'> <button className="Explore2">Explore Courses</button></div>
             <p className="Explore3">Join <span className="millionPP">developers</span>  across the world, students and authors working in companies.</p>
            </div>

           </div>
           <div className="headerDivFle2">
                 <div className='imgFileDiv'>
                   <img src="/img/GroupM2.svg" alt="Ailt" className="headerDivFle21"/>
                  
                   </div>
               
           </div>
        </div>

      </div>
      </div>
            </div>

     <div className="mmvn1">
       <div className="mmvn">

        {/* <p>Build your idea, buy and sell courses or projects, and collaborate with authors or programmers to bring your vision to life</p> */}
<p className='build'>Turn your ideas into reality by building, trading courses/projects, and collaborating with creators.</p>
        <div className="dereF kiki">
      <div className="coding1">
        <div className="coding4">
        
          <div className="coding2">
             <div className="coding3">
             
               <div className="imgSrc1 kolo">
               <img src="/img/mara.png" alt="" className="pap"/>
               </div>
             </div>
             <div className="coding3">
              <div className="Mywork">
                <div className="Mywork1"></div>
                 <div className="Mywork1"></div>
                  <div className="Mywork1"></div>
              </div>
               <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos-duration="3000">
               {/* <p  className="hands"> BRAND'S GROWTH</p> */}
                 {/* <div className="divUnderline"></div> */}
               <p className="hands1">Build Your Concept</p>
                                <div className="divUnderline"></div>
               <p className="hands2"> Empower your vision and drive success  with us by choosing the right creator  for your enterprise.</p>
             

                <div className="hands3">
                <div className="hands3s">
                  <div className='iconDivN'><p className="peopleL">Identity & Strength :</p></div>
                  <p className="hands4">Building your brand strengthens its identity and recognition in the market.</p>
                </div>
                {/* <div className="hands5  bins">
                <div className='iconDivN'><p className="peopleL">Trust & loyalty:</p></div>
                  <p className="hands4">A well-executed brand-building strategy fosters trust and loyalty among your customers.</p>
                </div> */}
              </div>
               <div className="conV">
                <div className='conV1'>Let's Build</div>
              
              </div>
               </div>
             </div>
          </div>
        </div>
      </div>
      </div>
 {/* <img src="/img/pppoint.svg" alt=""  className ="arrow"/> */}
      <div className="dereF kiki2">
      <div className="coding1">
        <div className="coding4">
        
          <div className=" coding2 coding56">
            
             <div className="coding3">
              <div className="Mywork2">
                <div className="Mywork1"></div>
                 <div className="Mywork1"></div>
                  <div className="Mywork1"></div>
              </div>
               <div data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
               {/* <p  className="hands"> CREATIVE INNOVATION</p> */}
               <p className="hands1">Fast Learning</p>
                 <div className="divUnderline"></div>
               <p className="hands2"> We empower students with the best, modern, and efficient methods for accelerated learning and mastery.</p>
             

                <div className="hands3">
                <div className="hands3s">
                  <div className='iconDivN'><p className="peopleL">Build Skills:</p></div>
                  <p className="hands4">Learn any desired course of ur choice and practice to build great project.</p>
                </div>
                {/* <div className="hands5  bins">
                <div className='iconDivN'><p className="peopleL">Growth:</p></div>
                  <p className="hands4">Innovation in  idea creation fuels progress and propels businesses into new horizons.</p>
                </div> */}
              </div>
              <div className="conV">
                <div className='conV1'>Join Now</div>
               
              </div>
               </div>
             </div>
              <div className="coding3">
               
               <div className="imgSrc1  kolo">
               <img src="/img/mara.png" alt="" className="pap"/>
               </div>
             </div>
          </div>
        </div>
      </div>
      </div>
        <div className="dereF kiki">
      <div className="coding1">
        <div className="coding4">
        
          <div className="coding2">
             <div className="coding3">
             
               <div className="imgSrc1 kolo">
               <img src="/img/mara.png" alt="" className="pap"/>
               </div>
             </div>
             <div className="coding3">
              <div className="Mywork">
                <div className="Mywork1"></div>
                 <div className="Mywork1"></div>
                  <div className="Mywork1"></div>
              </div>
               <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos-duration="3000">
               <p className="hands1">Collaborate With Creators</p>
              
                 <div className="divUnderline"></div>
               <p className="hands2">Join a creator in developing or building a project.</p>
             

                <div className="hands3">
                <div className="hands3s">
                  <div className='iconDivN'><p className="peopleL">Identity & Strength :</p></div>
                  <p className="hands4">Building your brand strengthens its identity and recognition in the market.</p>
                </div>
                {/* <div className="hands5  bins">
                <div className='iconDivN'><p className="peopleL">Trust & loyalty:</p></div>
                  <p className="hands4">A well-executed brand-building strategy fosters trust and loyalty among your customers.</p>
                </div> */}
              </div>
               <div className="conV">
                <div className='conV1'>Collaborate</div>
              
              </div>
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

  <div  className="fareWo" >
      <div className="him"> 
      <div className="Rtme ">
          <div className="Free">
            <div><p className="EarnP">How It Works </p>
            <div className="divUnder"></div></div>
          
          </div>
          {/*======  section4 ========*/}

          
                  <div className="goods1">
                    <div className="goods2">
                    <div className="inviteFr goods liom">Get Started with Easiest Steps</div>
                    <p className="proF">
Publish an article as a creator.</p>
           <div className='betStor ghFi likl'>
                  
                    <div className='bettors wanNy'>
                    <div className='bettorsDiv'>
                       <div className="ghFii19 cvcvcnc"><img src="/img/download.png" alt=""  className="withTyb"/></div>
                        <p className='bettors1' >01</p>
                    </div>
                    <div className='AddTip ghFii1 amGet'>Sign Up With  Us</div>
                    <p className='itWell ghFii12'>Explore thousands of exprienced tipsters with verified picks and statistics.</p>
                    </div>
                
                 
                    <div className='bettors wanNy'>
                    <div className='bettorsDiv'>
                       <div className="ghFii19 cvcvcnc"><img src="/img/er1.png" alt="" className="withTyb"  /></div>
                        <p className='bettors1' >02</p>
                    </div>
                    <div className='AddTip ghFii1 amGet'>Become a Creator</div>
                    <p className='itWell ghFii12'>Select your tipsters and subscribe to get betting and trading tips on your dashboard.</p>
                    </div>
               
               
                    <div className='bettors wanNy'>
                    <div className='bettorsDiv'>
                       <div className="ghFii19 cvcvcnc"> <img src="/img/err45.png" alt="" className="withTyb"/></div>
                        <p className='bettors1' >03</p>
                    </div>
                    <div className='AddTip ghFii1 amGet'>Create a Course/Project</div>
                    <p className='itWell ghFii12'>When you receive a tip, open your favourite bookmaker's website or trading platform and place the bet or trade.</p>
                    </div>
               
            </div>
            </div>
            <div className="goods3  goods4"></div>
                 <div className="goods3 goods5"></div>
            </div>
            
   

           
          
           </div>

           <div className="glow glowLeft"></div>
            <div className="glow glowRight"></div>
           </div> 

           {/*  */}
           </div>
        <div className="tou">
        <div className="TrendingCourses">Popular Courses </div>
        <div className="MostPopular">
        <p className="Checkout">Check out the most popular courses from our expert authors. </p>
       <a href="/courses"> <div className="viewMoreButton">view more</div> </a>
        </div>
        <div className="demHone">
        <div className="de">
          <div className={ courses === "python" ? "de1 de2" :"de1"} onClick={()=>setCourses("python")}>Python</div>
          <div  className={ courses === "javascript" ? "de1 de2" :"de1"} onClick={()=>setCourses("javascript")}>JavaScript</div>
          <div  className={ courses === "webDevelopment" ? "de1 de2" :"de1"} onClick={()=>setCourses("webDevelopment")}>Web Development</div>
          <div  className={ courses ==="Java" ? "de1 de2" :"de1"} onClick={()=>setCourses("Java")}>Java</div>
          <div  className={ courses ==="designs" ? "de1 de2" :"de1"} onClick={()=>setCourses("designs")}>Designs</div>
        </div>
        </div>
        </div>
 
   {courses === "python" ? 
   <div className='emekaEw'>
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
  // removeArrowOnDeviceType={["tablet", "mobile"]}
   removeArrowOnDeviceType={false}

  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  
      
         {
         card1.map((app,id)=>(
          <div className="cardDivWithImg imgW12 " key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src={app.img} alt="" className="divImg"/></div>
              
            <p className="WhatIs">{app.course}</p>
             <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/></div>(222,413)</div></div>
             
         
          <div className="Jan janu">
              <p className="landL">by <span className='authorName'>{app.name}</span></p>
              <p className="landL2">{app.button}</p>
            </div> 
        
        </div>
        ))}
      

        </Carousel>
        </div>
         :"" }
          {courses === "javascript" ? 
          <div className='emekaEw'>
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
  // removeArrowOnDeviceType={["tablet", "mobile"]}
   removeArrowOnDeviceType={false}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  
      
         {
         card1.map((app,id)=>(
          <div className="cardDivWithImg imgW12  cardmargin" key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src={app.img} alt="" className="divImg"/></div>
              
            <p className="WhatIs">{app.course}</p>
             <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon icon={faStar}  className="ii"/><FontAwesomeIcon icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/></div>(222,413)</div></div>
             
         
          <div className="Jan janu">
              <p className="landL">by <span className='authorName'>{app.name}</span></p>
              <p className="landL2">{app.button}</p>
            </div> 
        
        </div>
        ))}
      

        </Carousel>
        </div>
        :"" }
          {courses === "webDevelopment" ? 
          <div className='emekaEw'>
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
  // removeArrowOnDeviceType={["tablet", "mobile"]}
   removeArrowOnDeviceType={false}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  
      
         {
         card1.map((app,id)=>(
          <div className="cardDivWithImg imgW12 cardmargin" key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src={app.img} alt="" className="divImg"/></div>
              
            <p className="WhatIs">{app.course}</p>
             <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/></div>(222,413)</div></div>
             
         
          <div className="Jan janu">
              <p className="landL">by <span className='authorName'>{app.name}</span></p>
              <p className="landL2">{app.button}</p>
            </div> 
        
        </div>
        ))}
      

        </Carousel>
        </div>
        :"" }
          {courses === "Java" ? 
          <div className='emekaEw'>
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
  // removeArrowOnDeviceType={["tablet", "mobile"]}
   removeArrowOnDeviceType={false}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  
      
         {
         card1.map((app,id)=>(
          <div className="cardDivWithImg imgW12 cardmargin" key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src={app.img} alt="" className="divImg"/></div>
              
            <p className="WhatIs">{app.course}</p>
             <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/></div>(222,413)</div></div>
             
         
          <div className="Jan janu">
              <p className="landL">by <span className='authorName'>{app.name}</span></p>
              <p className="landL2">{app.button}</p>
            </div> 
        
        </div>
        ))}
      

        </Carousel>
        </div>
        :"" }
          {courses === "designs" ? 
          <div className='emekaEw'>
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
  // removeArrowOnDeviceType={["tablet", "mobile"]}
    removeArrowOnDeviceType={false}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  
      
         {
         card1.map((app,id)=>(
          <div className="cardDivWithImg imgW12 cardmargin" key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src={app.img} alt="" className="divImg"/></div>
              
            <p className="WhatIs">{app.course}</p>
             <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/></div>(222,413)</div></div>
             
         
          <div className="Jan janu">
              <p className="landL">by <span className='authorName'>{app.name}</span></p>
              <p className="landL2">{app.button}</p>
            </div> 
        
        </div>
        ))}
      

        </Carousel>
        </div>
        :"" }
      </div>

      <div className="BumbN gamaT">
         <img src="/img/ffflurry.svg"  alt="" className='igam'/>
          <img src="/img/ffflurry.svg"  alt="" className='igam1'/>
    
    <div className="dereF kiki">
      <div className="coding1">
        <div className="coding4">
        
          <div className="coding2 ">
             <div className="coding3">
               <div className="imgSrc1 gamat2">
               <img src="/img/mara.png" alt="" className="pap"/>
               </div>
             </div>
             <div className="coding3">
               <div>
               <p  className="hands">Web and Android Projects </p>
                 <div className="divUnderline"></div>
               <p className="hands1 pooko">Projects For  Diverse Career and  Fields</p>
               <p className="hands2 pooko1">We build  websites and Android apps  for various professions and industries.</p>
             

                <div className="hands3">
                <div className="hands3s">
                  <div className='iconDivN'><p  className="peopleL">Web Development for Diverse Professions :</p></div>
                  <p className="hands4 pooko1">Our projects cater to a wide array of careers and fields, delivering solutions that meet your unique needs.</p>
                </div>
                <div className="hands5 bins">
                <div className='iconDivN'><p className="peopleL">Empowering Businesses through Digital Presence :</p></div>
                  <p className="hands4 pooko1">Boost your online presence with our skill in creating personalized websites and Android apps for various professions and industries.</p>
                </div>
              </div>
                 <div className="conV">
                <div className='conV1'>Connect to create</div>
               
              </div>
               
               </div>
             </div>
          </div>
        </div>
      </div>
      </div>

      <img src="/img/pppointed.svg" alt=""  className ="arrow"/>

       <div className="dereF kiki2">
      <div className="coding1">
        <div className="coding4">
        
          <div className="coding2  coding56">
             
             <div className="coding3">
               <div>
               <p  className="hands">FASTER LEARNING</p>
                 <div className="divUnderline"></div>
               <p className="hands1 pooko">FAST LEARNING</p>
               <p className="hands2 pooko1">We empower aspiring programmers,web designers,graphic designers with the best, modern, and efficient  methods for accelerated learning and mastery.</p>
             

                <div className="hands3">
                <div className="hands3s">
                  <div className='iconDivN'><p className="peopleL">Skills :</p></div>
                  <p className="hands4 pooko1">We provide aspiring students with the tools  and techniques to accelerate their learning and achieve fast mastery.</p>
                </div>
                <div className="hands5  bins">
                <div className='iconDivN'><p className="peopleL">Desire :</p></div>
                  <p className="hands4 pooko1">Students are expected  to learn with a burning desire that propels them.</p>
                </div>
              </div>
                 <div className="conV">
                <div className='conV1'>Join Now</div>

              </div>
               </div>
             </div>
               <div className="coding3">
               <div className="imgSrc1 gamat2">
               <img src="/img/mara.png" alt="" className="pap"/>
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
          
            <p className="WhatIs">Ecommerce Project</p>
               <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon icon={faStar}  className="ii"/><FontAwesomeIcon icon={faStar}  className="ii"/><FontAwesomeIcon icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/></div>(222,413)</div></div>
         
             <div className="Jan janu">
              <p className="landL">by <span className='authorName'>Amaka Emmanuel</span></p>
              <p className="landL2">Preview</p>
            </div>
           

          </div>
           <div className="cardDivWithImg ">
           <div className="ImgDivGenerator"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
             
            <p className="WhatIs">Simple Sales Store</p>
               <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/></div>(222,413)</div></div>
         
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
              <div> <img src="/img/blob4.svg" alt=""  className="picss"/></div>
          </div>
          {card2.map((app,id)=>(
          <div className="cardDivWithImg" key={id}>
           <div className="ImgDivGenerator"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
          
            <p className="WhatIs">{app.project}</p>
            <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon icon={faStar}  className="ii"/><FontAwesomeIcon icon={faStar}  className="ii"/><FontAwesomeIcon icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/><FontAwesomeIcon  icon={faStar}  className="ii"/></div>(222,413)</div></div>
         
             <div className="Jan janu">
              <p className="landL">by <span className='authorName'>{app.name}</span></p>
              <p className="landL2">{app.button}</p>
            </div>

          </div>
          ))}
        
        </div>


<div className="mmvn1">
    
       <div className="mmvn">

        <div className="dereF dereFuy">
      <div className="coding1">
        <div className="coding4">
        
          <div className="coding2 addCode">
            
             <div className="coding3">
             
               <div className="imgSrc1 kolo derfA">
               <img src="/img/bkm.png" alt="" className="pap"/>
               </div>
             </div>
             <div className="coding3">
           
               <div>
              
                 <div className="divUnderline"></div>
               <p className="hands1">Become a Creator</p>
               <p className="hands2">Instructors from around the world teach millions of learners on MaratB. We provide the tools and skills to teach what you love.</p>
             
                    <div className='conV1 conV24'>Get Started</div>
                
               
               </div>
             </div>
          </div>
        </div>
      </div>
      </div>

      <div className="dereF dereFuy">
      <div className="coding1">
        <div className="coding4">
        
          <div className=" coding2 coding56  addCode">
            
             <div className="coding3">
             
               <div className='guidePaddBe'>

                 <div className="divUnderline"></div>
               <p className="hands1">P2P Project Development and Collaboration</p>
               <p className="hands2"> We encourage peer-to-peer project development and collaboration on our platform.</p>
             
 <div className='conV1 conV24'>Pair</div>
              
            
               </div>
             </div>
              <div className="coding3">
               
               <div className="imgSrc1  kolo derfA">
               <img src="/img/bkm.png" alt="" className="pap"/>
               </div>
             </div>
          </div>
        </div>
      </div>
      </div>


        </div> 
        </div> 

    </div>
  )
}

export default Home2