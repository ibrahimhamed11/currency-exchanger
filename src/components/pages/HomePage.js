import React, { useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import { Formik, Form } from 'formik';
import GenericSection from '../UiComponent/GenericSection';
import GenericAutocomplete from '../UiComponent/GenericAutocomplete';
import TextIput from '../UiComponent/TextIput';
import GenericButton from '../UiComponent/Buttons';
import CurrencyConverter from '../UiComponent/CurrencyConverter';
import { getExchangeRatesWithLabels, convertCurrency } from '../../api';

function HomePage() {
  const [options, setOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [selectedLabelFrom, setselectedLabelFrom] = useState('');
  const [selectedLabelTo, setselectedLabelTo] = useState('');

  const [toCurrency, setToCurrency] = useState('');
  const [conversionResult, setConversionResult] = useState(null);
  const formikRef = useRef();

  useEffect(() => {
    getExchangeRatesWithLabels()
      .then((symbols) => setOptions(symbols))
      .catch((error) => console.error('Error setting exchange options:', error));
  }, []);



  const handleFromChange = (event, newValue) => {
    setselectedLabelFrom(newValue.label || '');

  }
  const handleToChange = (event, newValue) => {
    setselectedLabelTo(newValue.label || '');

  }




  const handleSubmit = async (values) => {
    try {
      // console.log(selectedLabelFrom,selectedLabelTo,values.amount);

      const result = await convertCurrency(selectedLabelFrom,selectedLabelTo,values.amount);


      setConversionResult(result.convertedAmount);
    } catch (error) {
      console.error('Error during conversion:', error);
    }
  };

  const handleClick = () => {
    // Manually trigger Formik's handleSubmit
    formikRef.current.submitForm();
  };










  return (
    <Formik
      initialValues={{ amount: '', from: '', to: '' }}
      onSubmit={handleSubmit}
      innerRef={formikRef}
    >
      <Form>
        <div>
          <GenericSection title="Currency Exchanger">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextIput name="amount" label="Amount" type="number" color="secondary" width="100%" />
              </Grid>

              <Grid item xs={12} sm={4}>

      <GenericAutocomplete
        options={options}
        color="secondary"
        width="100%"
        label="From"
        onChange={handleFromChange}
      />

     

              </Grid>


      

              <Grid item xs={12} sm={4}>
              <GenericAutocomplete
        options={options}
        color="secondary"
        width="100%"
        label="To"
        onChange={handleToChange}
        />

              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}></Grid>

              <Grid item xs={12} sm={8}>
                <GenericButton
                  text="Convert"
                  color="primary"
                  type="button"
                  height="60px"
                  sx={{ width: '100%', marginLeft: 'auto' }}
                  onClick={handleClick}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                {conversionResult && (
                  <div>
                    <p>Conversion Result: {conversionResult}</p>
                  </div>
                )}
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextIput label="" name="email" type="email" value="john@example.com" />
              </Grid>

              <Grid item xs={12} sm={4}>
                <GenericButton
                  text="More Details"
                  color="primary"
                  type="submit"
                  height="48px"
                  sx={{ width: '100%', marginLeft: 'auto' }}
                />
              </Grid>
            </Grid>
          </GenericSection>

          <GenericSection title="Exchange Rates">
            <CurrencyConverter fromCurrency={fromCurrency} toCurrency={toCurrency} />
          </GenericSection>
        </div>
      </Form>
    </Formik>
  );
}

export default HomePage;
