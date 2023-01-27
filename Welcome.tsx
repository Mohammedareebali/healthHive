import React from 'react';
const svg:string = require('../images/Medicine-bro.svg').default;
console.log(svg)
export default function Welcome() :any {
  return (
    <div>
      <section className='word'>

      </section>
      <section className='image'>
      <img src={svg} alt="opening" />
      </section>
    </div>
  )
}
