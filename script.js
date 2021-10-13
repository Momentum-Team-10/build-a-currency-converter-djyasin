const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]
root.innerHTML = `
<p> Enter amount in US Dollars: $<input id='usd' type='text'></p> 
<p>Select currency to convert to: <select name='currency-converters' id='currency-converters'>
</select>
<button id='calculate'>Calculate</button>
`;

let selectConverter = document.getElementById('currency-converters');
let baseLabel = document.getElementById('usd');
let button = document.getElementById('calculate');



