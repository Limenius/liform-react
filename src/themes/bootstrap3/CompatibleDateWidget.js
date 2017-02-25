import React from 'react'
import classNames from 'classnames'
import { Field } from 'redux-form'

// produces an array [start..end-1]
const range = (start, end) => Array.from({ length: (end - start) }, (v, k) => k + start )

// produces an array [start..end-1] padded with zeros, (two digits)
const rangeZeroPad = (start, end) => Array.from({ length: (end - start) }, (v, k) => ('0' + (k + start)).slice(-2))

const extractYear = (value) => {
    return extractDateToken(value, 0)
}
const extractMonth = (value) => {
    return extractDateToken(value, 1)
}
const extractDay = (value) => {
    return extractDateToken(value, 2)
}

const extractDateToken = (value, index) => {
    if (!value) {
        return ''
    }
    const tokens = value.split('-')
    if (tokens.length != 3) {
        return ''
    }
    return tokens[index]
}

const DateSelector = props => {
    return (
        <select value={props.extractField(props.input.value)} onBlur={props.onBlur} onChange={props.onChange} className="form-control" id={'props-'+props.name} required={props.required} >
            { !props.required && <option key={''} value={''}>{props.emptyOption}</option> }
            { props.range.map((idx) => {
                return <option key={idx} value={idx}>{idx}</option>
            })}
        </select>
    )

}

const YearSelector = props => {
    return (
        <DateSelector extractField={extractYear} range={range(props.startYear, props.endYear)} emptyOption="year" {...props}/>
    )
}

const MonthSelector = props => {
    return (
        <DateSelector extractField={extractMonth} range={rangeZeroPad(1, 13)} emptyOption="month" {...props}/>
    )
}

const DaySelector = props => {
    return (
        <DateSelector extractField={extractDay} range={rangeZeroPad(1, 32)} emptyOption="day" {...props}/>
    )
}

class CompatibleDate extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            year: null,
            month: null,
            day: null,
            hour: null,
            minute: null,
            second: null,
        }
        this.onBlur = this.onBlur.bind(this)
    }

    // Produces a RFC 3339 full-date from the state
    buildRfc3339Date() {
        const year = this.state.year || ''
        const month = this.state.month ? ('0' + this.state.month).slice(-2) : ''
        const day = this.state.day ? ('0' + this.state.day).slice(-2) : ''
        return (year + '-' + month + '-' + day)
    }
    onChangeField(field, e) {
        const value = parseInt(e.target.value, 10)
        let changeset = {}
        changeset[field] = value
        this.setState(changeset, () => {
            this.props.input.onChange(this.buildRfc3339Date())
        })
    }
    onBlur() {
        this.props.input.onBlur(this.buildRfc3339Date())
    }
    render() {
        const field = this.props
        const className = classNames([
            'form-group',
            { 'has-error' : field.meta.touched && field.meta.error }
        ])
        return (
            <div className={className}>
                <label className="control-label" htmlFor={field.id}>{field.label}</label>
                <ul className="list-inline">
                    <li>
                        <YearSelector {...field} onBlur={this.onBlur} onChange={this.onChangeField.bind(this, 'year')}/>
                    </li>
                    <li>
                        <MonthSelector {...field} onBlur={this.onBlur} onChange={this.onChangeField.bind(this, 'month')}/>
                    </li>
                    <li>
                        <DaySelector {...field} onBlur={this.onBlur} onChange={this.onChangeField.bind(this, 'day')}/>
                    </li>
                    <li>
                        {/*<HourSelector {...field} onBlur={this.onBlur} onChange={this.onChangeField.bind(this, 'hour')}/>*/}
                    </li>
                </ul>
                {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
                {field.description && <span className="help-block">{field.description}</span>}
            </div>
        )
    }
}

const CompatibleDateWidget = (props) => {
    return (
        <Field
            component={CompatibleDate}
            label={props.label}
            name={props.fieldName}
            required={props.required}
            id={'field-'+props.fieldName}
            placeholder={props.schema.default}
            description={props.schema.description}
            startYear={props.schema['start-year'] || 1900}
            endYear={props.schema['end-year'] || new Date().getFullYear() + 5 }
            type={props.type}
        />
    )
}

export default CompatibleDateWidget

// Only for testing purposes
export { extractDateToken }
