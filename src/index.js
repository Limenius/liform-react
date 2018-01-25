import React, { Component } from "react";
import PropTypes from "prop-types";
import DefaultTheme from "./themes/bootstrap3";
import { reduxForm } from "redux-form";
import renderFields from "./renderFields";
import renderField from "./renderField";
import processSubmitErrors from "./processSubmitErrors";
import buildSyncValidation from "./buildSyncValidation";
import { setError } from "./buildSyncValidation";
import compileSchema from "./compileSchema";
import styled from 'styled-components'
const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;

const Button = props => {
  const {tabClick, tabNum} = props
  return(
    <button id={tabNum} onClick={tabClick}>A Button</button>
  )
}

// const Tabs = props => {
//   const {schema} = props;
//   let tabs=[];
//     for (let i = 0; i < schema.tabs; i++) {
//       tabs.push(<Button key={i}/>)
//       console.log(tabs)
//     }
    
//   return(<Tabs>{tabs}</Tabs>)
// }



class BaseForm extends  Component {
  constructor(props){
    super(props)
    // this.state = {
    //   tab: 0
    // }
    this.tabClick = this.tabClick.bind(this)
    
  }

  state= {
    tab:0
  }


  tabClick = (e) => {
    this.setState({tab: parseInt(e.target.id)}, () => {
      console.log(this.state.tab)
    })
  } 



  

  render() {
    const { schema, handleSubmit, theme, error, submitting, context } = this.props;


    function Schema () {
      this.type = 'object'
      this.properties = {}
    }
    

  if (schema.tabs) {
    let tabs=[];
    let forms=[];
    for (let i = 0; i < schema.tabs; i++) {
      tabs.push(<Button key={i} tabNum={i} tabClick={this.tabClick}/>)
      
      forms.push(new Schema())
    }
    console.log(forms)
    console.log(forms[1])

    let propsKeysAndVals = Object.entries(schema.properties)
    console.log(propsKeysAndVals)
    for (let i=0; i < propsKeysAndVals.length; i++) {
      console.log("inside for: propsKeysandVals")
      console.log(propsKeysAndVals[i][1].tab)
      let formIndex = propsKeysAndVals[i][1].tab - 1;
      console.log(formIndex)
      let key = propsKeysAndVals[i][0] 
      let vals = propsKeysAndVals[i][1]
      //forms[formIndex].push(propsKeysAndVals[i])
      forms[formIndex].properties[key] = vals
    }
    console.log(forms)
    let formsArray = forms.map( schema => {
      return(<Div>
     <form onSubmit={handleSubmit}>
     {renderField(schema, null, theme || DefaultTheme, "", context)}
      <div>{error && <strong>{error}</strong>}</div>
      <button className="btn btn-primary" type="submit" disabled={submitting} onClick={this.buttonClick}>
       Submit
       </button>
    </form>
     </Div>)
    })
   
   let form = (tabs) => {
     for (let i = 0; i < tabs; i++ ) {
       if (this.state.tab === i) {
         return formsArray[i]
       }
     }

   } 
    
    return(
      <Div>
        <h1>Hello!</h1>
        <div>{tabs}</div>
        <div>{form(schema.tabs)}</div>
        
      </Div>)
  } else {
    return(
      <Div>
     <form onSubmit={handleSubmit}>
     {renderField(schema, null, theme || DefaultTheme, "", context)}
      <div>{error && <strong>{error}</strong>}</div>
      <button className="btn btn-primary" type="submit" disabled={submitting} onClick={this.buttonClick}>
       Submit
       </button>
    </form>
     </Div>
    )
  }
  // return (
  //   {
  //     if (schema.tabs){
  //       <Div><h1>Hello World!</h1></Div>
  //     }  else {
  //       <Div>
  //   <form onSubmit={handleSubmit}>
  //     {renderField(schema, null, theme || DefaultTheme, "", context)}
  //     <div>{error && <strong>{error}</strong>}</div>
  //     <button className="btn btn-primary" type="submit" disabled={submitting}>
  //       Submit
  //     </button>
  //   </form>
  //   </Div>
  //     }
  //   }
    
  // );
}
};

const Liform = props => {
  props.schema.showLabel = false;
  const schema = compileSchema(props.schema);
  const formName = props.formKey || props.schema.title || "form";
  const FinalForm = reduxForm({
    form: props.formKey || props.schema.title || "form",
    validate: props.syncValidation || buildSyncValidation(schema, props.ajv),
    initialValues: props.initialValues,
    context: { ...props.context, formName }
  })(props.baseForm || BaseForm);
  return (
    <FinalForm
      renderFields={renderField.bind(this)}
      {...props}
      schema={schema}
    />
  );
};

Liform.propTypes = {
  schema: PropTypes.object,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  syncValidation: PropTypes.func,
  formKey: PropTypes.string,
  baseForm: PropTypes.func,
  context: PropTypes.object,
  ajv: PropTypes.object
};

export default Liform;

export {
  renderFields,
  renderField,
  processSubmitErrors,
  DefaultTheme,
  setError
};
