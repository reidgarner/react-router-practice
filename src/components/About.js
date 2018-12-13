import React from 'react'
import { Link, Route } from 'react-router-dom'

import Nested from './Nested'

const About = (props) => {
  const path = props.match.path

  return (
    <div>
      <h1>About</h1>
      <p>Readymade kombucha viral, freegan pop-up cardigan dreamcatcher la croix fanny pack sustainable. Franzen truffaut poutine, before they sold out irony shoreditch raw denim whatever waistcoat pabst cliche palo santo DIY freegan. Marfa street art woke portland vexillologist. Sustainable pork belly pug chicharrones farm-to-table la croix, direct trade unicorn cray.</p>
      <Link to={`${path}/more-information`}>More Info!</Link>
      <Route 
        path={`${path}/more-information`}
        component={Nested}
      />
    </div>
  )
}

export default About
