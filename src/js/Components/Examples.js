import React from 'react'
import { Match } from 'react-router'
import Simple from './Simple'
import InitialValues from './InitialValues'
import CreateTheme from './CreateTheme'
import PillLink from './PillLink'

const Examples = ({ pathname }) => (
  <div>
    <h2>Examples</h2>
    <ul className="nav nav-pills">
        <PillLink to={`${pathname}/simple`} label="Simple Form" />
        <PillLink to={`${pathname}/initial-values`} label="Initial Values" />
        <PillLink to={`${pathname}/create-theme`} label="Create (or modify) a theme" />
    </ul>

    <Match pattern={`${pathname}/simple`} component={Simple}/>
    <Match pattern={`${pathname}/initial-values`} component={InitialValues}/>
    <Match pattern={`${pathname}/create-theme`} component={CreateTheme}/>
    <Match pattern={pathname} exactly render={() => (
      <h3>Select one of the examples</h3>
    )}/>
  </div>
)

export default Examples
