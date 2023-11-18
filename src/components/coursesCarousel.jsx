import React ,{useState} from 'react'
import "./styles/home.css"
import "./styles/carosel.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faWandMagicSparkles,faStar} from '@fortawesome/free-solid-svg-icons'

const CoursesCarousel = ({nameCou,description}) => {
      const[courses,setCourses] =  useState("python")
 const card2 = [ {name:"Matthew O.",img:"/img/gripa.png",course:"HTML/CSS", button:"Preview" ,price:"Free",price1:"₦15,000"},{name:"Philip E.",img:"/img/gripa3.png",course:"JavaScript",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Micheal K.",img:"/img/gripa4.png",course:"React",button:"Preview",price:"Free",price1:"₦25,000"},{name:"Joy M.",img:"/img/gripa5.png",course:"Nodejs",button:"preview",price:"Free",price1:"₦30,000"},{name:"Francisca K.",img:"/img/gripa6.png",course:"MySql",button:'Preview',price:"Free",price1:"₦15,000"},{name:"Emmanuel J.",img:"/img/grip7.png",course:"Python",button:'Preview',price:"Free",price1:"₦25,000"}]

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
  return (
    <div>
       <div className="projectPreviewDiv1">
        <div className="tou">
        <div className="TrendingCourses">{nameCou}</div>
        <div className="MostPopular">
        <p className="Checkout">{description} </p>
       <div className="fffo" ><form className="" style={{padding:"2px 10px"}}><input type="search"  placeholder="Search for courses" className="fffo1"/></form> </div>
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
         card2.map((app,id)=>(
          <div className="cardDivWithImg imgW12 " key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src={app.img} alt="" className="divImg"/></div>
              
            <p className="WhatIs">{app.course}</p>
             <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/></div>(222,413)</div></div>
             
         
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
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  
      
         {
         card2.map((app,id)=>(
          <div className="cardDivWithImg imgW12  cardmargin" key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src={app.img} alt="" className="divImg"/></div>
              
            <p className="WhatIs">{app.course}</p>
             <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/></div>(222,413)</div></div>
             
         
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
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  
      
         {
         card2.map((app,id)=>(
          <div className="cardDivWithImg imgW12 cardmargin" key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src={app.img} alt="" className="divImg"/></div>
              
            <p className="WhatIs">{app.course}</p>
             <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/></div>(222,413)</div></div>
             
         
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
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  
      
         {
         card2.map((app,id)=>(
          <div className="cardDivWithImg imgW12 cardmargin" key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src={app.img} alt="" className="divImg"/></div>
              
            <p className="WhatIs">{app.course}</p>
             <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/></div>(222,413)</div></div>
             
         
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
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  
      
         {
         card2.map((app,id)=>(
          <div className="cardDivWithImg imgW12 cardmargin" key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src={app.img} alt="" className="divImg"/></div>
              
            <p className="WhatIs">{app.course}</p>
             <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/></div>(222,413)</div></div>
             
         
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

    </div>
  )
}

export default CoursesCarousel