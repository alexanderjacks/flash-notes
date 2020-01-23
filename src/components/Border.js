import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import NivoCalendar from './NivoCalendar';
import './Border.css';

export default function Border(props) {
  return (
    <div className='Border'>
      <Jumbotron>
        <h1>Border Security Numbers</h1>
        <p>"America Is Full" Is The Unofficial Policy</p>
      </Jumbotron>
      <p>Data sourced from the good folks at <a href='https://www.aila.org/infonet/deaths-at-adult-detention-centers'>American Immigration Lawyers Association</a>, who keep track of this.</p>
      <Jumbotron>
      <h1>Deaths In American Concentration Camps</h1>
      <p></p>
      </Jumbotron>

      <div className='nivocalendar'>
        <NivoCalendar />
      </div>
    </div>
  );
}
