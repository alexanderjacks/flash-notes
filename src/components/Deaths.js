import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import NivoCalendar from './NivoCalendar';
import './Golf.css';

export default function Deaths(props) {
  return (
    <div className='Login'>
      <Jumbotron>
        <h1>Deaths In American Concentration Camps</h1>
        <p></p>
      </Jumbotron>
      <a href='https://trumpgolfcount.com'>Data sourced from our friends at trumpgolfcount.com
      </a>
      <div className='nivocalendar'>
        <NivoCalendar />
      </div>
    </div>
  );
}
