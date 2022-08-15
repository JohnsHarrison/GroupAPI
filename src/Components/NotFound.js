import React from 'react';
import morpheus from '../Images/morpheus2.png';
import {Link } from 'react-router-dom';
import '../StylesAd/style.css'

function NotFound() {
  return (
    <div className="PageContainer">
      <div className="titleContainer waviy">
        <span className='a'>4</span>
        <span className='b'>0</span>
        <span className='c'>4</span>
        <span className='d'>:</span>
        <span style={{width:'10px'}}></span>
        <span className='e'>p</span>
        <span className='f'>a</span>
        <span className='g'>g</span>
        <span className='h'>e</span>
        <span style={{width:'10px'}} ></span>
        <span className='j'>n</span>
        <span className='k'>o</span>
        <span className='l'>t</span>
        <span style={{width:'10px'}}></span>
        <span className='n'>f</span>
        <span className='o'>o</span>
        <span className='p'>u</span>
        <span className='q'>n</span>
        <span className='r'>d</span>
        {/* 404: Not Found */}
      </div>
      <div className="imageContainer">
        <img src={morpheus} alt="" />
        <div className="buttonContainer">
          <Link to={'/about'}>
            <div className="btn1">About</div>
          </Link>

          <Link to={'/'}>
            <div className="btn2">Home</div>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default NotFound