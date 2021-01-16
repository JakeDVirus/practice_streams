import React from 'react';
import { useForm } from "react-hook-form";

import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    marginTop : "100px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    maxWidth: "60ch",
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  heading: {
    marginBottom: "50px"
  },
  buttonSubmit: {
    width: "150px",
    alignSelf: 'center'
  }
}));

const StreamForm = props => {
  const {initialValues = null, pageTitle, onFormSubmit, streamFormType, streamId} = props;
  const {register, handleSubmit, errors} = useForm({mode: "all"});
  const classes = useStyles();

  const onSubmit = (data) => {
    if(streamFormType === "createStream") {
      onFormSubmit(data);
    } else if (streamFormType === "editStream") {
      onFormSubmit(streamId, data);
    }
  }

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.heading}>
        {pageTitle}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          name="title"
          label="title"
          variant="outlined"
          InputLabelProps={{ shrink: true }} 
          defaultValue={initialValues ? initialValues.title: ""}
          inputRef={register({required: true})}
          error={!!errors.title}
          helperText={errors.title && "This field is required"}
        />
        <TextField
          name="description"
          label="description"
          variant="outlined"
          multiline
          rows={6}
          defaultValue={initialValues  ? initialValues.description : ""}
          inputRef={register({required: true})}
          error={!!errors.description}
          helperText={errors.description && "This field is required"}
        />
        <Button variant="contained" color="primary" type="submit" size="large" className={classes.buttonSubmit} >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default StreamForm;