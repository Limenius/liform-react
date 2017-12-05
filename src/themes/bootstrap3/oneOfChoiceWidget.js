import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { change } from 'redux-form'
import { connect } from 'react-redux'
import ls from 'local-storage'
import renderField from '../../renderField'
import _ from 'lodash'
import { compact } from '../../util'

class OneOfChoiceWidget extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            choice: this.getDefaultValue(props),
            cached: {}
        }
        this.renderOption = this.renderOption.bind(this)
        this.selectItem = this.selectItem.bind(this)

        this.cacheRefSchemas(this.props.schema.oneOf)
    }

    getDefaultValue(props){
        const store = window.vcard.store.getState()
        const path = compact(store.selected.element+"."+store.schemas.current)
        if(props.fieldName == "data"){
            this.hideSelector = true
            const actionType = _.get(store, path.replace(new RegExp(props.fieldName + "$"), "action_type"))
            const subType = _.get(store, path.replace(new RegExp(props.fieldName + "$"), "sub_type"))
            const type = (subType!=undefined && subType!=null) ? actionType +"-"+subType : actionType

            for(var index = 0; index < props.schema.oneOf.length; index ++){
                const item = props.schema.oneOf[index]
                if(item.title==""+type){
                    return index
                }
            }
        }
    }

    setItemCached(itemTitle, itemCached){
        let cached = this.state.cached
        cached[itemTitle] = itemCached
        this.setState({cached: cached})
    }

    cacheRefSchemas(oneOf){
        const widget = this;
        oneOf.forEach(function(item){
            if(ls.get(item.title)==null){
                fetch(item.ref, { credentials: 'same-origin' }).then(response => response.json())
                    .then(schema => {
                        ls.set(item.title, schema)
                        widget.setItemCached(item.title, true)
                    })
            }
            else{
                widget.setItemCached(item.title, true)
            }
        })
    }

    getCachedSchema(schemaTitle){
        return ls.get(schemaTitle)
    }

    render() {
        const field = this.props
        const className = classNames([
            'form-group',
        ])
        const schema = field.schema
        const options = schema.oneOf

        return (
            <div className={className}>
                { !this.hideSelector && <label className="control-label" htmlFor={'field-'+field.fieldName}>{schema.title}</label> }
                <select ref="sel" className={classNames({"form-control": true, "hidden": this.hideSelector})} onChange={this.selectItem.bind(this)} id={'field-'+field.fieldName} required={field.required} multiple={false}>
                    { _.map(options, (item, idx) => {
                        return <option key={options.indexOf(item)} value={idx}>{item.title || idx}</option>
                    })}
                </select>
                <div className="container-oneof">
                    {
                        this.renderOption()
                    }
                </div>
                { field.description && <span className="help-block">{field.description}</span> }
            </div>
        )
    }

    renderOption(){
        const field = this.props
        const refSchemaTitle = field.schema.oneOf[this.state.choice].title
        if(!this.state.cached[refSchemaTitle]) {
            return "waiting for caching...."
        }
        else{
            return renderField(this.getCachedSchema(refSchemaTitle), field.fieldName, field.theme, field.name, field.context)
        }
    }

    selectItem(e) {
        const { schema, context, dispatch } = this.props
        for (let property in schema.oneOf[this.state.choice].properties) {
            dispatch(change(context.formName, property, null))
        }
        if(this.refs.sel) this.setState({ choice: e.target.value })
    }
}

OneOfChoiceWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.object,
    multiple: PropTypes.bool,
    required: PropTypes.bool,
}

export default connect()(OneOfChoiceWidget)
