import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function GenericAutocomplete({ options, color, width, label, value, onChange }) {
  return (
    <Autocomplete
      options={options}
      value={value}
      onChange={(event, newValue) => {
        if (onChange) {
          // Check if the selected value is in the options array
          if (options.includes(newValue)) {
            // Extract the label from the selected value
            const selectedLabel = newValue.label || newValue;
            
            // Log the label separately
            console.log('Selected Label:', selectedLabel);
            
            onChange(event, newValue);
          } else {
            console.error('Invalid value selected:', newValue);
          }
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label || 'Select an option'}
          variant="outlined"
          color={color || 'primary'}
          fullWidth
          style={{ width: width || '100%' }}
        />
      )}
    />
  );
}

export default GenericAutocomplete;
