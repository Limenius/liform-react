import React from 'react'
import { Route } from 'react-router-dom'
import Simple from './Simple'
import InitialValues from './InitialValues'
import CreateTheme from './CreateTheme'
import ChangeBaseForm from './ChangeBaseForm.js'
import Validation from './Validation.js'
import CustomFieldValidation from './CustomFieldValidation.js'
import PillLink from './PillLink'
import Arrays from './Arrays'
import Refs from './References'
import Combining from './Combining'
import AllWidgets from './AllWidgets'

const Examples = ({ match }) => (
  <div>
    <ul className="nav nav-pills">
        <PillLink to={match.url} label="Simple Form" activeOnlyWhenExact={true}/>
        <PillLink to={`${match.url}/initial-values`} label="Initial Values" />
        <PillLink to={`${match.url}/create-theme`} label="Create a Theme" />
        <PillLink to={`${match.url}/change-base-form`} label="Change Layout" />
        <PillLink to={`${match.url}/validation`} label="Validation" />
        <PillLink to={`${match.url}/custom-field-validation`} label="Custom Field Validation" />
        <PillLink to={`${match.url}/arrays`} label="Arrays" />
        <PillLink to={`${match.url}/refs`} label="Refs" />
        <PillLink to={`${match.url}/combining`} label="Combining schemas" />
        <PillLink to={`${match.url}/all-widgets`} label="All the widgets" />
    </ul>

    <Route path={match.url} exact component={Simple} />
    <Route path={`${match.url}/initial-values`} component={InitialValues}/>
    <Route path={`${match.url}/create-theme`} component={CreateTheme}/>
    <Route path={`${match.url}/change-base-form`} component={ChangeBaseForm}/>
    <Route path={`${match.url}/validation`} component={Validation}/>
    <Route path={`${match.url}/custom-field-validation`} component={CustomFieldValidation}/>
    <Route path={`${match.url}/arrays`} component={Arrays}/>
    <Route path={`${match.url}/refs`} component={Refs}/>
    <Route path={`${match.url}/combining`} component={Combining}/>
    <Route path={`${match.url}/all-widgets`} component={AllWidgets}/>
  </div>
)

export default Examples
