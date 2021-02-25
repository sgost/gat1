import React from 'react';
import LightSwitch from './Switch';
function Banner(){
    return(
      <div className="page1">
        <div className="container">
        <div className="banner-1">
          <div className="banner-top">
            <div className="logo"><p>Fidicons3D</p></div>
            <div className="btn">
              <p>Contact Us</p>
             </div>
            </div>
          </div>
          <div className="banner-bottom">
          <div className="banner-para">
          <p>High resolution PNG images of<br/>beautiful 3D icons in 3 color varient<br/>and two different angles</p>
          <LightSwitch/>
          </div>
          </div>
        </div>
        </div>
    );
        
}

export default Banner;
