import React from 'react'
import "./styles/ebook.css"
import Paginate from "./pagination"

const Ebook = () => {

  const pdfCourse = [{name:"REACT",text:"Learn Modern React",img:"",img1:"",h2:""},{name:"JAVASCRIPT",text:"Learn Modern Javascript",img:"",img1:"",h2:""},{name:"NODEJS",text:"Learn  Nodejs",img:"",img1:"",h2:""},{name:"MYSQL",text:"Learn MySql",img:"",img1:"",h2:""},{name:"PYTHON",text:"Learn Python",img:"",img1:"",h2:""},{name:"JAVA",text:"Learn Java",img:"",img1:"",h2:""},{name:"REACT-NATIVE",text:"Learn React-native",img:"",img1:"",h2:""},{name:"MONGODB",text:" Learn MongoDB",img:"",img1:"",h2:""},{name:"DJANGO",text:"Learn Django",img:"",img1:"",h2:""}]
  const pdfCourse1 = [{name:"ECOMMERCE",text:"Build a Modern Ecommerce Websites",img:"",img1:"",h2:""},{name:"PORTFOLIO",text:"Build a Modern Portfolio Websites",img:"",img1:"",h2:""},{name:"INVESTMENT",text:"Build a Modern Investment Websites",img:"",img1:"",h2:""},{name:"Exchange",text:"Build a Modern Exchange Websites",img:"",img1:"",h2:""},{name:"BLOG",text:"Build a Modern Blog Websites",img:"",img1:"",h2:""},{name:" SIMPLE STORE",text:"Build a Modern Store Websites",img:"",img1:"",h2:""},{name:"INDUSTRY",text:"Build a Modern Factory Websites",img:"",img1:"",h2:""},{name:"SOCIAL",text:"Build a Modern Social Websites",img:"",img1:"",h2:""},{name:"NEWS",text:"Build a Modern News Websites",img:"",img1:"",h2:""}]
  

  return (
    <div>
    <div>


<div className='MaratT'>
    <div className='AboutM'>
          <p className='MaratB'>eBook Library</p>
     <p className='Pa'>Experience practical project-based courses that are straightforward, easy to understand, and free from unnecessary fluff.</p>

</div>
<img  className='AboutM' src="/img/AboutM.svg"  alt="" />
</div>

<div className='ebookMDiv'>
  <p                    className='pCourse'>Courses</p>
  <div className='ipQe'></div>
  <div className='ccc'>
    {pdfCourse.map((app,id)=>(
    <div className='ebookCard' key={id}>
        <div className='ebookCard1'><img src="/img/dsa.png" alt="" className='ebookImg'/></div>
      <div className='rentPP'>
        <p className='ebookCard2'>{app.name}</p>
        <p className='ebookCard3'>70+ JS Challenges: Data</p>
        <p className='ebookCard4'>{app.text}</p>
        <div className='ebookCard5'>
          <img src="/img/cardb.png" alt="" className='ebookCard6'/>
          <p className='ebookCard7'>Get it Now</p>
        </div>
        </div>
         <div className='rentPe1'><img src="/img/Grou.jpg" alt=""  className='rentPe'/></div>
    </div>
    ))}
    
  </div>

</div>
<div className='pPdf'>
<div className='ebookMDiv'>
  <p className='pCourse'>Projects</p>
   <div className='ipQe'></div>
  <div className='ccc'>
    {pdfCourse1.map((app,id)=>(
    <div className='ebookCard' key={id}>
      <div className='ebookCard1'><img src="/img/dsa.png" alt="" className='ebookImg'/></div>
      <div className='rentPP'>
        <div className='ebookCard1'><img src="" alt="" className=''/></div>
        <p className='ebookCard2'>{app.name}</p>
        <p className='ebookCard3'>70+ JS Challenges: Data</p>
        <p className='ebookCard4'>{app.text}</p>
        <div className='ebookCard5'>
          <img src="" alt="" className='ebookCard6'/>
          <p className='ebookCard7'>Get it Now</p>
        </div>
        </div>
        <div className='rentPe1'><img src="/img/amaka.jpg" alt=""  className='rentPe'/></div>
    </div>
    ))}
    
  </div>

</div>
 
</div>
    </div>

    </div>
  )
}

export default Ebook