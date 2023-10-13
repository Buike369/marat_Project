import React from 'react'
import "./styles/ebook.css"

const Ebook = () => {

  const pdfCourse = [{name:"REACT",text:"",img:"",img1:"",h2:""},{name:"JAVASCRIPT",text:"",img:"",img1:"",h2:""},{name:"NODEJS",text:"",img:"",img1:"",h2:""},{name:"MYSQL",text:"",img:"",img1:"",h2:""},{name:"PYTHON",text:"",img:"",img1:"",h2:""},{name:"JAVA",text:"",img:"",img1:"",h2:""},{name:"REACT-NATIVE",text:"",img:"",img1:"",h2:""},{name:"MONGODB",text:"",img:"",img1:"",h2:""},{name:"DJANGO",text:"",img:"",img1:"",h2:""}]
  const pdfCourse1 = [{name:"ECOMMERCE",text:"",img:"",img1:"",h2:""},{name:"PORTFOLIO",text:"",img:"",img1:"",h2:""},{name:"INVESTMENT",text:"",img:"",img1:"",h2:""},{name:"Exchange",text:"",img:"",img1:"",h2:""},{name:"BLOG",text:"",img:"",img1:"",h2:""},{name:" SIMPLE STORE",text:"",img:"",img1:"",h2:""},{name:"INDUSTRY",text:"",img:"",img1:"",h2:""},{name:"SOCIAL",text:"",img:"",img1:"",h2:""},{name:"NEWS",text:"",img:"",img1:"",h2:""}]
  

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
        <p className='ebookCard4'>Build 5 Modern Websites</p>
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
        <p className='ebookCard4'>Build 5 Modern Websites</p>
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