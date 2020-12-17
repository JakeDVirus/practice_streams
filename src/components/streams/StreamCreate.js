import React from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import { createStream } from "../../actions/index";


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
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxx                                        xxxxxxxxxxxx
xxxxxxxxxx         REACT COMPONENT                xxxxxxxxxxxx
xxxxxxxxxx                                        xxxxxxxxxxxx
xxxxxxxxxx         (STARTS HERE)                  xxxxxxxxxxxx
xxxxxxxxxx                                        xxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/


const StreamCreate = (props) => {
  const { handleSubmit, createStream } = props;
  const classes = useStyles();

  const onFormSubmit = (formValue) => {
    createStream(formValue);
  }

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

/****************************************************
*********        REACT COMPONENT      ***************
*********        ENDS HERE            ***************
*****************************************************/


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



const formWrapped = reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);

// const mapDispatchToProps = dispatch => ({
//   createStream: () => dispatch(createStream)
// })

export default connect(null, {createStream})(formWrapped);