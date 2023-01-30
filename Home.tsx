import React from 'react'
import Consultation from './Consultation'
import Mainnav from './Mainnav'
import Services from './Services'
import Welcome from './Welcome'


export default function Home(): any{
  return(
    <div className='welcome'>
    <Mainnav/>
    <Welcome/>
    <Services/>
    <Consultation/>
    </div>
  )
}
