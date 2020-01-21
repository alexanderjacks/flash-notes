import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import NivoCalendar from './NivoCalendar';
import './Login.css';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='Login'>
      <Jumbotron>
        <h1>Days Trump At Golf Resorts</h1>
        <p>To Include Holidays Without Confirmed Golfing</p>
      </Jumbotron>
      <div className='nivocalendar'>
        <NivoCalendar />
      </div>
        <a href='https://trumpgolfcount.com'>Data sourced from our friends at trumpgolfcount.com
        </a>
    </div>
  );
}
