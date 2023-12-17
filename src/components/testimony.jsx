import React from 'react'
import "./styles/home.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimony = () => {

       const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
        <div className ="yiv3">
         <div className='yiv'>
          <div className='TheyAre'>They are talking about us</div>
          <div className='DonTake'>Don't Take Our Word For It.</div>
          <div className='seeWhat'>See what our customers have to say.Find out what our clients are saying below</div>
         <div className=" marginMu fadama ">
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
 <div style={{padding:"4px 10px"}}>      
<div className="earnSayPp">
  <p className="partnerShip">"Through marat affiliate program I made 50k in just three  weeks by referring 20friends to the platform."</p>
  <div className="favourPath">
    <div><img src="/img/mara.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Chukwubuike Amogu</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div> 
 <div style={{padding:"4px 10px"}}>      
<div className="earnSayPp">
  <p className="partnerShip">"Through marat affiliate program I made 50k in just three  weeks by referring 20friends to the platform."</p>
  <div className="favourPath">
    <div><img src="/img/mara.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Chukwubuike Amogu</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
 <div style={{padding:"4px 10px"}}>      
<div className="earnSayPp">
  <p className="partnerShip">"Through marat affiliate program I made 50k in just three  weeks by referring 20friends to the platform."</p>
  <div className="favourPath">
    <div><img src="/img/mara.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Chukwubuike Amogu</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
 <div style={{padding:"4px 10px"}}>           
<div className="earnSayPp">
  <p className="partnerShip">"I purchased a course from Marat Technology, and it's packed with valuable content that greatly enhances my professional skills."</p>
  <div className="favourPath">
    <div><img src="/img/mara.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Amaka Ngozi</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
<div style={{padding:"4px 10px"}}>
<div className="earnSayPp">
  <p className="partnerShip">"Thanks to Marat Technology's P2P project collaboration, I've not only enhanced my skills but also successfully developed outstanding projects, leading to substantial earnings."</p>
  <div className="favourPath">
    <div><img src="/img/mara.png" alt="" className="popopo"/></div>
     <div>
      <div className="amakaDiv">-Amaka Amogu</div>
      <div className="country">Nigeria</div>
     </div>
  </div>
</div>
</div>
         
          </Carousel>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Testimony;