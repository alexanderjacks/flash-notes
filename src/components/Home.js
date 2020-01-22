import React from 'react';
import { Image } from 'react-bootstrap';
import './Home.css';
import mural from './puppet_masters.png';

export default function Home() {
  return (
    <div className='Home'>
      <div className='section'>
      <h1>
        <span role='img' aria-label='chart-emoji'>📊&nbsp;</span>
        Trump Data in Pictures
      </h1>
      <h2>Here you can see facts from President Trump's first term in office.
      </h2>
      </div>
      <div className='section'>
      <Image src={mural} responsive />
      <p>Seen on the streets of Copenhagen, Denmark, European Union.
      </p>
      </div>
    </div>
  );
}
