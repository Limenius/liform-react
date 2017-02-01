import React from 'react'
import { Match } from 'react-router'
import Simple from './Simple'
import InitialValues from './InitialValues'
import CreateTheme from './CreateTheme'
import ChangeBaseForm from './ChangeBaseForm.js'
import PillLink from './PillLink'

const Examples = ({ pathname }) => (
  <div>
    <ul className="nav nav-pills">
        <PillLink to={pathname} label="Simple Form" activeOnlyWhenExact={true}/>
        <PillLink to={`${pathname}/initial-values`} label="Initial Values" />
        <PillLink to={`${pathname}/create-theme`} label="Create a Theme" />
        <PillLink to={`${pathname}/change-base-form`} label="Change Layout" />
    </ul>

    <Match pattern={pathname} exactly component={Simple} />
    <Match pattern={`${pathname}/initial-values`} component={InitialValues}/>
    <Match pattern={`${pathname}/create-theme`} component={CreateTheme}/>
    <Match pattern={`${pathname}/change-base-form`} component={ChangeBaseForm}/>
  </div>
)

export default Examples
