import React from 'react';
import { Field, reduxForm } from "redux-form";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));


const renderTextField = (fieldProps) => {
  const {input, multiline, rows} = fieldProps;
  const {invalid, touched, error} = fieldProps.meta;
  console.log("fieldProps", fieldProps);
  return (
    <TextField 
    variant="outlined"
    label={input.name}
    multiline = {multiline}
    rows = {rows}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    />
  )
}

//*********** COMPONENT STARTS HERE **************/

const StreamCreate = (props) => {
  const { handleSubmit } = props;
  const classes = useStyles();

  const onFormSubmit = (formValue) => {
    console.log("submit", formValue);
  }
  console.log("formProps", props);

  return (
    <form className={classes.root} onSubmit={handleSubmit(onFormSubmit)}>
      <Field name="title" component={renderTextField} /> <br />
      <Field 
        name="description" 
        component={renderTextField} 
        multiline={true} 
        rows={4}
      />
      <br />
      <Button variant="contained" color="primary" type="submit">Submit</Button>
    </form>
  )
}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title) {
    errors.title = "You must enter a title"
  }
  if(!formValues.description) {
    errors.description="you must enter a description"
  }
  return errors;
}

export default reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);
