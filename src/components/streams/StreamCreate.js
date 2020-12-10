import React from 'react';
import { Field, reduxForm } from "redux-form";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const renderedBasicInputField = ({
  input, 
  meta: { error, invalid, touched }
}) => {
  return ( 
    <TextField 
      id="outlined-basic" 
      error={touched && invalid}
      helperText={touched && error}
      label="Name" 
      variant="outlined"
      {...input}
    /> 
  )
};

const renderedMultilineField = ({
  input, 
  meta: {error, invalid, touched}
}) => {
  return (
    <TextField 
      {...input}
      id="outlined-multiline-static" 
      label="Description" 
      multiline
      rows={5}
      variant="outlined" 
      error = {touched && invalid}
      helperText={touched && error}
    /> 
  )
};


//******* COMPONENT STARTS HERE ********/
const StreamCreate = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props;
  const classes = useStyles();

  const onFormSubmit = (formValues) => {
    console.log(formValues)
  };

  return (
    <form 
      className={classes.root} 
      noValidate 
      autoComplete="off"
      onSubmit={handleSubmit(onFormSubmit)}
    >
        <Field name="title" component={renderedBasicInputField} /><br />
        <Field name="description" component={renderedMultilineField}/><br/>
        <Button variant="contained" color="primary" type="submit">Submit</Button>
    </form>
  );
};

const validate = (formValues) => {
  const errors= {};
  if (!formValues.title) {
    errors.title = "You must enter a title"; 
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
}

export default reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);


//react hook form
//react final form
// redux form
//formik and yup