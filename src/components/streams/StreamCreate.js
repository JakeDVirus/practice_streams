import React from 'react';
import { Field, reduxForm } from "redux-form";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

//******* COMPONENT STARTS HERE ********/
const StreamCreate = () => {
  const classes = useStyles();

  const renderInput = (formProps) => {
    return (
      <div className="field">
        <input {...formProps.input}/>
      </div>
    )
  }

  const renderedBasicInputFiled = (formProps) => ( 
    <TextField 
      id="outlined-basic" 
      label="Enter Text" 
      variant="outlined" 
      {...formProps.input}
    /> 
  );

  const renderedMultilineField = (formProps) => (
    <TextField id="outlined-multiline-static" 
      label="Enter Description" 
      multiline
      rows={4}
      variant="outlined" 
      {...formProps.input}
    /> 
  );

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Field 
          name="title" 
          component={renderedBasicInputFiled}
        />
      </div>
      <div>
        <Field 
          name="description" 
          component={renderedMultilineField}/>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);


//react hook form
//react final form
// redux form
//formik and yup