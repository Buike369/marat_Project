import React from 'react'
import "./styles/courses.css"

const LatestCourses = () => {

  const card =[ {name:"Kingsley Chukwubuike",img:"john", course:"HTML/CSS Tutorials"},{name:"Kingsley Chukwubuike",img:"john",course:"MYSQL Tutorials"},{name:"Kingsley Chukwubuike",img:"john",course:"JavaScript Tutorials"},,{name:"Kingsley Chukwubuike",img:"john",course:"JavaScript Tutorials"},,{name:"Kingsley Chukwubuike",img:"john",course:"JavaScript Tutorials"},,{name:"Kingsley Chukwubuike",img:"john",course:"JavaScript Tutorials"},,{name:"Kingsley Chukwubuike",img:"john",course:"JavaScript Tutorials"},,{name:"Kingsley Chukwubuike",img:"john",course:"JavaScript Tutorials"},,{name:"Kingsley Chukwubuike",img:"john",course:"JavaScript Tutorials"}]
  return (
    <div>
 <div className='MaratT'>
    <div className='AboutM'>
          <p className='MaratB'>New Courses Library</p>
     <p className='Pa'>Experience practical project-based courses that are straightforward, easy to understand, and free from unnecessary fluff.</p>

</div>
<img  className='AboutM' src="/img/AboutM.svg"  alt="" />
</div>


  <div className='pinM'>
         <div className="projectPreviewDiv1">
        <div className="tou">
        <div className="TrendingCourses">Latest Courses </div>
     
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
  

    </div>
  )
}

export default LatestCourses