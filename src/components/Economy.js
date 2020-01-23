import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import NivoCalendar from './NivoCalendar';
import './Economy.css';

export default function Economy(props) {
  return (
    <div className='Economy'>
      <Jumbotron>
        <h1>Economy</h1>
        <p></p>
      </Jumbotron>

      Here's a where we got our data on farms: <a href=''></a>

      <div className='nivocalendar'>
        <NivoCalendar />
      </div>
    </div>
  );
}
