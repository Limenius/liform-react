import React from 'react'
import { Match, Link } from 'react-router'
import Simple from './Simple'

const Examples = ({ pathname }) => (
  <div>
    <h2>Examples</h2>
    <ul>
      <li><Link to={`${pathname}/simple`}>Simple Example</Link></li>
    </ul>

    <Match pattern={`${pathname}/simple`} component={Simple}/>
    <Match pattern={pathname} exactly render={() => (
      <h3>Select one of the examples</h3>
    )}/>
  </div>
)

export default Examples
