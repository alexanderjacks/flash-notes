import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import NivoCalendar from './NivoCalendar';
import './Golf.css';

export default function Golf(props) {
  return (
    <div className='Login'>
      <Jumbotron>
        <h1>Days Trump At Golf Resorts</h1>
        <p>To Include Holidays Without Confirmed Golfing Because This White House Is Secretive About It</p>
      </Jumbotron>
      <a href='https://trumpgolfcount.com'>Data sourced from our friends at trumpgolfcount.com
      </a>
      <div className='nivocalendar'>
        <NivoCalendar />
      </div>
    </div>
  );
}
