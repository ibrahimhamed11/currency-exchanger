// CurrencyConverter.js

import React, { useState, useEffect } from 'react';
import { getExchangeRates } from '../../api';
import CurrencyCard from './CurrencyCard';
import Grid from '@mui/material/Grid';

const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState(null);

  useEffect(() => {
    getExchangeRates()
      .then(rates => setExchangeRates(rates))
      .catch(error => console.error('Error setting exchange rates:', error));
  }, []);

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  return (
    <div>
      <Grid container spacing={3}>
        {exchangeRates &&
          chunkArray(Object.entries(exchangeRates), 3).map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map(([currency, rate]) => (
                <Grid item key={currency} xs={12} sm={4}>
                  <CurrencyCard currency={currency} value={rate} />
                </Grid>
              ))}
            </React.Fragment>
          ))}
      </Grid>
    </div>
  );
};

export default CurrencyConverter;
