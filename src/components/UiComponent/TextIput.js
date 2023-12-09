import React from 'react';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

const TextIput = ({ label, type = 'text', value, disabled, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      type={type}
      label={label}
      variant="outlined"
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error ? meta.error : ''}
      value={value}  // Set the value prop to display the value
      disabled={disabled} // Set disabled to true to prevent editing
    />
  );
};

export default TextIput;
