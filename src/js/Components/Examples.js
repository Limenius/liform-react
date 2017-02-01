import React from 'react'
import { Match } from 'react-router'
import Simple from './Simple'
import InitialValues from './InitialValues'
import CreateTheme from './CreateTheme'
import PillLink from './PillLink'

const Examples = ({ pathname }) => (
  <div>
    <ul className="nav nav-pills">
        <PillLink to={pathname} label="Simple Form" activeOnlyWhenExact={true}/>
        <PillLink to={`${pathname}/initial-values`} label="Initial Values" />
        <PillLink to={`${pathname}/create-theme`} label="Create (or modify) a theme" />
    </ul>

    <Match pattern={pathname} exactly component={Simple} />
    <Match pattern={`${pathname}/initial-values`} component={InitialValues}/>
    <Match pattern={`${pathname}/create-theme`} component={CreateTheme}/>
  </div>
)

export default Examples
