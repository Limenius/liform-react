import React from 'react'
import { Match } from 'react-router'
import Simple from './Simple'
import InitialValues from './InitialValues'
import CreateTheme from './CreateTheme'
import ChangeBaseForm from './ChangeBaseForm.js'
import Validation from './Validation.js'
import CustomFieldValidation from './CustomFieldValidation.js'
import PillLink from './PillLink'

const Examples = ({ pathname }) => (
  <div>
    <ul className="nav nav-pills">
        <PillLink to={pathname} label="Simple Form" activeOnlyWhenExact={true}/>
        <PillLink to={`${pathname}/initial-values`} label="Initial Values" />
        <PillLink to={`${pathname}/create-theme`} label="Create a Theme" />
        <PillLink to={`${pathname}/change-base-form`} label="Change Layout" />
        <PillLink to={`${pathname}/validation`} label="Validation" />
        <PillLink to={`${pathname}/custom-field-validation`} label="Custom Field Validation" />
    </ul>

    <Match pattern={pathname} exactly component={Simple} />
    <Match pattern={`${pathname}/initial-values`} component={InitialValues}/>
    <Match pattern={`${pathname}/create-theme`} component={CreateTheme}/>
    <Match pattern={`${pathname}/change-base-form`} component={ChangeBaseForm}/>
    <Match pattern={`${pathname}/validation`} component={Validation}/>
    <Match pattern={`${pathname}/custom-field-validation`} component={CustomFieldValidation}/>
  </div>
)

export default Examples
