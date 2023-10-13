import React from 'react'
import "./styles/courses.css"

const Courses = () => {
const card1 =[ {name:"Chukwubuke K.",img:"/img/bgf.svg",course:"HTML/CSS", button:"Preview" ,price:"$15"},{name:"Chukwubuike K.",img:"/img/bgf.svg",course:"JavaScript",button:"Preview",price:"$20"},{name:"chukwubuike K.",img:"/img/bgf.svg",course:"React",button:"Preview",price:"$25"},{name:"Chukwubuike K.",img:"/img/bgf.svg",course:"Nodejs",button:"preview",price:"$25"},{name:"Chukwubuike K.",img:"/img/bgf.svg",course:"MySql",button:'Preview',price:"$20"},{name:"Chukwubuike K.",img:"/img/bgf.svg",course:"Python",button:'Preview',price:"$25"},{name:"Chukwubuike K.",img:"/img/bgf.svg",course:"ExpressJs",button:"Preview",price:"$20"},{name:"Chukwubuike K.",img:"/img/bgf.svg",course:"Figma",button:"Preview",price:"$15"}, {name:"Chukwubuke K.",img:"/img/bgf.svg",course:"HTML/CSS", button:"Preview" ,price:"$15"}, {name:"Chukwubuke K.",img:"/img/bgf.svg",course:"HTML/CSS", button:"Preview" ,price:"$15"}, {name:"Chukwubuke K.",img:"/img/bgf.svg",course:"HTML/CSS", button:"Preview" ,price:"$15"}, {name:"Chukwubuke K.",img:"/img/bgf.svg",course:"HTML/CSS", button:"Preview" ,price:"$15"}]
  const card =[ {name:"Kingsley Chukwubuike",img:"john", course:"HTML/CSS Tutorials"},{name:"Kingsley Chukwubuike",img:"john",course:"MYSQL Tutorials"},{name:"Kingsley Chukwubuike",img:"john",course:"JavaScript Tutorials"}]
  return (
    <div>
 <div className='MaratT'>
    <div className='AboutM'>
          <p className='MaratB'>Courses Library</p>
     <p className='Pa'>Experience practical project-based courses that are straightforward, easy to understand, and free from unnecessary fluff.</p>

</div>
<img  className='AboutM' src="/img/AboutM.svg"  alt="" />
</div>


  <div className='pinM'>
         <div className="projectPreviewDiv1">
        <div className="tou">
        <div className="TrendingCourses">Latest Courses </div>
        {/* <div className="MostPopular">
        <p className="Checkout">Check out the most popular courses from our expert authors. </p>
        <div className="viewMoreButton">view more</div>
        </div> */}
         <p className="Checkout">Check out the most latest courses from our expert authors. </p>
        </div>
   
        <div className="filesVideo">
          {card.map((app,id)=>(
          <div className="cardDivWithImg" key={id}>
           <div className="ImgDivGenerator"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
            <p className="WhatIs">{app.course}</p>
            <p className="">by {app.name}</p>
            <div className="Jan">
              <p className="">Intermediate</p>
              <p className="">Jan 20, 2023</p>
              <p className="">1h 18m</p>
            </div>

          </div>
          ))}
          
         
          
        
        </div>
      </div>
      </div>
  <div className='pinM'>
       <div className="projectPreviewDiv1">
        <div className="tou">
        <div className="TrendingCourses">Available Courses </div>
        <div className="MostPopular">
        <p className="Checkout">Check out the courses that interest You. </p>
        <div className="viewMoreButton">view more</div>
        </div>
        </div>
   
        <div className="filesVideo">
          {card1.map((app,id)=>(
          <div className="cardDivWithImg imgWidth" key={id}>
           <div className="ImgDivGenerator imgHeight"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
               <p className='skillPath'>SKILL PATH</p>
            <p className="WhatIs">{app.course}</p>
         
          <div className="Jan janu">
              <p className="landL">{app.price}</p>
              <p className="landL2">{app.button}</p>
            </div>

          </div>
          ))}
          
         
          
        
        </div>
      </div>
      </div>

    </div>
  )
}

export default Courses