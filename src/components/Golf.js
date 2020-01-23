import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Image } from 'react-bootstrap';
import NivoCalendar from './NivoCalendar';
import npr_in_the_rough from './gettyimages-148110464.png';
import './Golf.css';

export default function Golf(props) {
  return (
    <div className='Golf'>
      <Jumbotron>
        <h1>Days Trump At Golf Resorts</h1>
        <p>To Include Holidays Without Confirmed Golfing Because This White House Is Secretive About It</p>
      </Jumbotron>
      <a href='https://trumpgolfcount.com'>
        Data sourced from our friends at trumpgolfcount.com
      </a>
      <div className='nivocalendar'>
        <NivoCalendar />
      </div>
        <div>
          <Image src={npr_in_the_rough} responsive />
          <p>gettyimages-148110464
          </p>
        </div>
    </div>
  );
}
