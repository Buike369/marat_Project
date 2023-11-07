import React ,{useState} from 'react'
import "./styles/blog.css"

const Blog = () => {
  const [category,setCategory] = useState(["cateory1","cateory2","cateory3","cateory4","cateory5","cateory6"])
  const [blog,setBlog] = useState(["cateory1","cateory2","cateory3","cateory4","cateory5","cateory6"])
  
  return (
    <div>
 <div className="mainDivBlog">
      <div className='blogHome'>
        <div className='blogHome2'>
          <p className='blogHome1'>The Blog</p>
          <p className='building'>Building your brand strengthens its identity and recognition in the market.</p>
        </div>
          <div className='blogHome3'>
            <form>
              <input type="search" placeholder="Search for blog" className='blogHome4'/>
            </form>
          </div>
      </div>


      <div className='catMn'>
        {category.map((app,id)=>(
      <div key={id} className="col">{app}</div>
      ))}
      </div>


      <div className='AfomF'>
        <div className='AfomF1'> <img src="/img/gripa5.png" alt="" className='AfomF3' /></div>
          <div className='AfomF2'>
            <div className='AfomF21'>5 Best Tools For Digital Marketing</div>
            <p className='AfomF22'>The best tools for your digital marketing will depend on your strategy,budgets and objectives,however it is essential to choose the ones that align with your goals and provide the features you need, below are the 5 best suggestion for you to start with</p>
            <div className='AfomF23'> -- Read More</div>
          </div>
      </div>


   <div className="ToolPP">
    {blog.map((app,id)=>(
      <div className="ToolP" key={id}>
        <div className="ToolP1"><img src="/img/gripa5.png" alt="" className="ToolP6" /></div>
        <div className='betToolP'>
        <p className="ToolP2">5th Oct 2023</p>
        <div className="ToolP3">5 Best Tools For Digital Marketing</div>
        <p className="ToolP4">The best tools for your digital marketing will depend on your strategy,budgets and objectives,however it is essential to choose the ones that align with your goals and provide the features you need, below are the 5 best suggestion for you to start with</p>
        <div className="ToolP5"> Read More</div>
        </div>
      </div>
      ))}
      </div>


</div>
    </div>
  )
}

export default Blog