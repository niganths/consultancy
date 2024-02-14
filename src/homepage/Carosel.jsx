import React from 'react';
import { Carousel } from 'antd';
import img1 from '../img/20240201_173600.jpg'
import img2 from '../img/20240201_173607.jpg'
import img3 from '../img/20240201_173611.jpg'
import img4 from '../img/20240201_173615.jpg'
const contentStyle = {
  height: '360px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
    background: '#364d79',
  marginTop:'-10px'
};
const Carouse = () => (
  <Carousel autoplay>
    <div>
            <h3 style={contentStyle}><img src={ img1} /></h3>
    </div>
    <div>
            <h3 style={contentStyle}><img src={ img2} /></h3>
    </div>
    <div>
            <h3 style={contentStyle}><img src={ img3} /></h3>
    </div>
    <div>
            <h3 style={contentStyle}><img src={ img4} /></h3>
    </div>
  </Carousel>
);
export default Carouse;