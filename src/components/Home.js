import React from 'react';
import { Image, Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import './Home.css';
import mural from './puppet_masters.png';
import small_logo from '../logo192.png';
import npr_in_the_rough from './gettyimages-148110464.png';

export default function Home() {
  return (
    <div className='Home'>
      <div className='section'>
        <Jumbotron className='Jumbo'><h1>
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <Image src={small_logo}  />
              </Col>
              <Col xs={12}>
                <span role='img' aria-label='chart-emoji'>📊</span>
                &nbsp;Trump Data in Pictures
              </Col>
            </Row>
          </Grid>
        </h1></Jumbotron>
        <h2 className='p-3'>Here you can see facts from President Trump's first term in office.
        </h2>
      </div>
      <div className='section'>
      <p>Economy copy, link
      </p>
      </div>
      <div className='section'>
      <p>Border copy, link
      </p>
      </div>
      <div className='section'>
        <Image src={npr_in_the_rough} responsive />
        <p>gettyimages-148110464
        </p>

        <h1>Golf copy, link
        </h1>
      </div>
      <div className='section'>
        <Image src={mural} responsive />
        <p>Seen on the streets of Copenhagen, Denmark, European Union. Artist presumed Deex Welin; <a href='https://www.reddit.com/r/pics/comments/5pbhn5/trump_mural_seen_in_copenhagen/'>sourced reddit</a>.
        </p>
      </div>
    </div>
  );
}
