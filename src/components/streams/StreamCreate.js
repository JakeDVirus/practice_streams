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


const renderedBasicInputField = (formProps) => {
  return ( 
    <TextField 
      id="outlined-basic" 
      label="Enter Text" 
      variant="outlined"
      value={formProps.input.value}
      onChange={formProps.input.onChange}
    /> 
  )
};

const renderedMultilineField = (formProps) => (
  <TextField id="outlined-multiline-static" 
    label="Enter Description" 
    multiline
    rows={4}
    variant="outlined" 
    {...formProps.input}
  /> 
);


//******* COMPONENT STARTS HERE ********/
const StreamCreate = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Field 
          name="title" 
          component={renderedBasicInputField}
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