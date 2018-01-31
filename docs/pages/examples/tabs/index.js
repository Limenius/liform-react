import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import Liform from '../../../../src/'

const Demo = () => {
    const reducer = combineReducers({ form: formReducer })
    const store = createStore(reducer)
    const schema = {
        'tabs': 3,
        'tabNames': ["Personal Information", "Work Eligibility", "Demographics"],
        'type':'object',
        'properties': {
            'firstName': { 'type':'string', 'title': 'First Name', 'tab': 1 },
            'lastName': { 'type':'string', 'title': 'Last Name', 'tab': 1 },
            'email': { 'type': 'string', 'title': 'Email', 'widget': 'email', 'format': 'email', 'tab': 1  },
            'resume': {'type': 'string', 'title': 'Resume', 'widget': 'textarea', 'tab': 1},
            'ethnicity': { 'enum':[ 'Hispanic/Latino','Not Hispanic/Latino' ], 'type':'string', 'title': 'Ethnicity', 'tab': 3 },
            'veteranStatus': { 'enum':[ 'Protected Veteran','Veteran', 'Not a Veteran', 'Do not wish to disclose' ], 'type':'string', 'title': 'Veteran Status', 'tab': 3 },
            'disability': { 'enum':[ 'Disabled','Not Disabled', 'Do not wish to disclose' ], 'type':'string', 'title': 'Disability', 'tab': 3 },
            'eligibtyProof': { 'type':'string', 'title': 'Are you able to provide proof of eligibilty to work in the US?', 'tab': 2 },
            'sponsorship': { 'enum':[ 'Yes','No' ], 'type':'string', 'title': 'Will you require sponsorship for employment status?', 'tab': 2 },
            'availability': { 'type': 'string', 'title': 'When would you be available to start?', 'widget': 'compatible-date', 'format': 'date', 'tab': 2 },
            'checkbox': { 'type':'boolean', 'title': 'I agree with your terms', 'tab': 3 }
        }
    }
    return (
        <Provider store={store}>
            <Liform schema={schema} onSubmit={(v) => {console.log(v)}}/>
        </Provider>
    )
}

ReactDOM.render(
    <Demo/>,
    document.getElementById('placeholder')
)
