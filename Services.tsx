import React from 'react'
import {Button, Card} from 'react-bootstrap'
const doctor:string = require('../images/Researching-amico.svg').default;
const health:string = require('../images/services.svg').default;
const support:string = require('../images/Pediatrician.svg').default;
const service:string = require('../images/solution.svg').default;

export default function Services() {
  return (
    <div className='service'>
        <div className='subheading'>
      <h2>our <b><i>Medical Services</i></b></h2>
      </div>
      <div className='service-info'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={doctor} />
      <Card.Body>
        <Card.Title>Find a doctor</Card.Title>
        <Card.Text>
          get help quickly and effectively.
        </Card.Text>
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={support} />
      <Card.Body>
        <Card.Title>Health support</Card.Title>
        <Card.Text>
         it's essential to make educated decisions with regards to choosing your healthcare.
         </Card.Text>
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={health} />
      <Card.Body>
        <Card.Title>Quality Services</Card.Title>
        <Card.Text>
          get help quickly and effectively.
        </Card.Text>
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={service} />
      <Card.Body>
        <Card.Title>get your solution</Card.Title>
        <Card.Text>
          it's essential to make educated decisions with regards to choosing your healthcare.
        </Card.Text>
        </Card.Body>
    </Card>
      </div>
      <div className='learn-more'>
      <Button>learn more</Button>
      </div>
    </div>
  )
}
