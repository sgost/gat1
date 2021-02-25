import React from 'react';

function Page2() {
  const [status,setStatus]=React.useState(true)
  return(
      <div className="pageback">
      <div className="container">
      <div className="page2">
        <div className="banner2-top">
          <div className="b2-colors">
          <h1 onClick={()=>setStatus(true)}>3 Colors</h1>
             <p>We have got three different<br/>varient for you</p>
          </div>
          <div className="b2-angles">
          <h1 onClick={()=>setStatus(false)}>2 Angles</h1>
             <p>Two different angles to suit<br/>everyones need</p>
          </div>
        </div>
        <div className="banner2-bottom">
  
          {
          status?<div className="b2colorsimages">
        <div className="cam ca">
            <img src="https://i.ibb.co/DV0Pxjx/cam1.png" alt=""/>
        </div>
        <div className="cam ca">
            <img src="https://i.ibb.co/jRZvVqd/cam2.png" alt=""/>
        </div>
        <div className="cam">
            <img src="https://i.ibb.co/ZMMrYMj/cam3.png" alt=""/>
        </div>
      </div>:<div className="b2angleimages cam3">
        <div className="cam">
            <img src="https://i.ibb.co/t3pRJBF/2d.png" alt=""/>
        </div>
        <div className="cam">
            <img src="https://i.ibb.co/MDskS2F/3d.png" alt=""/>
        </div>
      </div>
      }
      </div>
  </div>             
  </div> 
  </div>   
          
    );
}
export default Page2;

