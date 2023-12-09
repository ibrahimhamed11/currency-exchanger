// api.js

import axios from 'axios';

const accessKey = '0304da98ac7626fff647bfb2428e0291';
const baseURL = 'http://data.fixer.io/api';
const symbols = 'USD,EUR,GBP,AUD,CAD,JPY,CNY,INR,MXN'; // Add more symbols as needed

const api = axios.create({
  baseURL,
  params: {
    access_key: accessKey,
    symbols,
  },
});

export const getExchangeRates = () => {
  return api.get('/latest')
    .then(response => response.data.rates)
    .catch(error => {
      console.error('Error fetching exchange rates:', error);
      throw error;
    });
};

export const getExchangeRatesWithLabels = () => {
  return api.get('/latest')
    .then(response => {
      const rates = response.data.rates;
      return Object.keys(rates).map(currency => ({
        label: currency,
        value: rates[currency],
      }));
    })
    .catch(error => {
      console.error('Error fetching exchange rates with labels:', error);
      throw error;
    });
};





export const convertCurrency = async (from, to, amount) => {
  try {

    const latestExchangeRates = await getExchangeRates();

    const fromRate = latestExchangeRates[from];
    const toRate = latestExchangeRates[to];

    if (fromRate === undefined || toRate === undefined) {
      throw new Error('Invalid currency pair');
    }

    const exchangeRate = toRate / fromRate;
    const result = {
      amount: amount,
      from: from,
      to: to,
      convertedAmount: amount * exchangeRate,
      exchangeRate: exchangeRate,
    };

    return result;
  } catch (error) {
    console.error('Error during conversion:', error);
    throw error;
  }
};