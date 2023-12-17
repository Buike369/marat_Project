import React from 'react'
import "./styles/projects.css"
import Carousel from "./coursesCarousel"
import CoursesCarousel from './coursesCarousel'
import PaginationFile from "./pagination"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faWandMagicSparkles,faStar} from '@fortawesome/free-solid-svg-icons'

const Project = () => {
  const nameCou = "Latest Projects"
  const description = "Check out our latest projects from our expert authors."
  const card1 =[ {name:"Kingsley Chukwubuike",img:"john",project:"Store Project", button:"Preview" ,price:"$60"},{name:"Kingsley Chukwubuike",img:"john",project:"Gaming Projects", button:"Preview" ,price:"$120"},{name:"kingsley Chukwubuike",img:"john",project:"Investment Project", button:"Preview" ,price:"$100"},{name:"Kingsley Chukwubuike",img:"john",project:"Ecommerce Project", button:"Preview" ,price:"$100"},{name:"Kingsley Chukwubuike",img:"john",project:"Blog Project", button:"Preview" ,price:"$70"},{name:"Kingsley Chukwubuike",img:"john",project:"Factory Project", button:"Preview" ,price:"$150"},{name:"Kingsley Chukwubuike",img:"john",project:"News Project", button:"Preview" ,price:"$200"},{name:"Kingsley Chukwubuike",img:"john",project:"Industry Project", button:"Preview" ,price:"$200"},{name:"Kingsley Chukwubuike",img:"john",project:"Industry Project", button:"Preview" ,price:"$200"},{name:"Kingsley Chukwubuike",img:"john",project:"Industry Project", button:"Preview" ,price:"$200"},{name:"Kingsley Chukwubuike",img:"john",project:"Industry Project", button:"Preview" ,price:"$200"},{name:"Kingsley Chukwubuike",img:"john",project:"Industry Project", button:"Preview" ,price:"$200"}]
  const card =[ {name:"Kingsley Chukwubuike",img:"john",project:"Portfolio Project", button:"Preview" ,price:"$30"},{name:"Kingsley Chukwubuike",img:"john",project:"Gaming Projects", button:"Preview" ,price:"$120"},{name:"kingsley Chukwubuike",img:"john",project:"Investment Project", button:"Preview" ,price:"$100"}]

  return (
    <div>
     <div className='MaratT'>
    <div className='AboutM'>
          <p className='MaratB'>Projects Library</p>
     <p className='Pa'>Discover a range of practical project-based project templates with complete packages for your business, including e-commerce stores, booking apps, and more.</p>

</div>
<img  className='AboutM' src="/img/AboutM.svg"  alt="" />
</div>
         {/* <div className="projectPreviewDiv1">
        <div className="tou">
        <div className="TrendingCourses">Latest Projects </div>
        <p className="Checkout">Check out our latest projects from our expert authors. </p>

        </div>
   
        <div className="filesVideo">
          {card.map((app,id)=>(
          <div className="cardDivWithImg" key={id}>
           <div className="ImgDivGenerator"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
            <p className='skillPath'>PROJECT PATH</p>
            <p className="WhatIs">{app.project}</p>
             <div className="Jan janu">
              <p className="landL">{app.price}</p>
              <p className="landL2">{app.button}</p>
            </div>

          </div>
          ))}
        </div>


      </div> */}

      <Carousel  nameCou={nameCou} description={nameCou}/>
         <div className="upDiv"></div>
       <div className="projectPreviewDiv1">
        <div className="tou">
        <div className="TrendingCourses">Available Projects </div>
         <p className="Checkout">Check out the best project that interest You. </p>
        {/* <div className="MostPopular">
        <p className="Checkout">Check out the courses that interest You. </p>
        <div className="viewMoreButton">view more</div>
        </div> */}
        </div>
   
     
         <div className="filesVideo">
          {card1.map((app,id)=>(
          <div className="cardDivWithImg" key={id}>
           <div className="ImgDivGenerator"> <img src="/img/bkm.png" alt="" className="divImg"/></div>
            <p className='skillPath'>PROJECT PATH</p>
            <p className="WhatIs">{app.project}</p>
            <div className=''><div className="authorName1 loveFbv">4.7 <div  className="StarF" > <FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/><FontAwesomeIcon key={id} icon={faStar}  className="ii"/></div>(222,413)</div></div>
             
         
          <div className="Jan janu">
              <p className="landL">by <span className='authorName'>{app.name}</span></p>
              <p className="landL2">{app.button}</p>
            </div>

          </div>
          ))}
        </div>
      <PaginationFile />
      </div>

    </div>
  )
}

export default Project