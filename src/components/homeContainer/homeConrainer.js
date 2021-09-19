import React, { Component } from 'react';
import './homeContainer.css'

import Home1 from '../../asset/home1.png'
import Home2 from '../../asset/home2.png'
import Home3 from '../../asset/home3.png'
import Home4 from '../../asset/home4.png'

class bottomNavbar extends Component {

    render() {
      
        return (
            <div>
              <img src={Home1} alt="" className="homeImgbanner"/>
              <img src={Home2} alt="" className="homeImgbanner1" />
              <img src={Home3} alt="" className="homeImgbanner2" />
              <img src={Home4} alt="" className="homeImgbanner3" />
              <br />
            </div>
        );
    }
}

export default bottomNavbar;