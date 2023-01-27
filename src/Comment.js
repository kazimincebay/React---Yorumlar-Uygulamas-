import React from 'react';
import {faker} from '@faker-js/faker'

const Comment =({isim,day,rate,yorum})=>{    
  return(
    
  <div className="comment">
    <a className="avatar" href='/'>
      <img alt="" src={faker.image.avatar()}/>
    </a>
    <div className="content">
      <a className="author" href='/'>{isim}</a>
      <div className="metadata">
        <div className="date">{day} Gün Önce</div>
        <div className="rating">
          <i className="star icon"></i>
          {rate} Yıldız
        </div>
      </div>
      <div className="text">
        {yorum}
      </div>
    </div>
  </div>
  )
}

export default Comment;