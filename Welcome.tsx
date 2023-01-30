import React from 'react';
import { Button } from 'react-bootstrap';
require('../css/welcome.css');

const svg:string = require('../images/Medicine-bro.svg').default;
console.log(svg)
export default function Welcome() :any {
  return (
    <div className='intro'>
      <section className='word'>
<h1>Transformative approach to <b>healthcare</b></h1>
<p>our skilled doctors have experience <br /> with wide range of ailments to serve the needs <br /> of our patients.</p>
      <Button>get help</Button>
      </section>
      <section className='image'>
      <img src={svg} alt="opening" />
      </section>
    </div>
    
  )
}
