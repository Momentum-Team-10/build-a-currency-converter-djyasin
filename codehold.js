root.innerHTML = `
<p> Enter amount in US Dollars: $<input id='usd' type='text'></p> 
<p>Select currency to convert to: <select name='currency-converters' id='currency-converters'>
</select>
<button id='calculate'>Calculate</button>
`;

let selectConverter = document.getElementById('currency-converters');
let usd = document.getElementById('usd');
let button = document.getElementById('calculate');
let conversionOutput = document.getElementById('conversion-currency');


for (let code of currancies){
  let option = document.createElement('option');
  option.innerText = code;
  option.value = code;
  selectConverter.appendChild(option);
}

selectConverter.addEventListener('change', () => {
  converterLabel.innerText = selectConverter.value;
});
selectConverter.addEventListener('change', () => {
  converterLabel.innerText = selectConverter.value;
});

button.addEventListener('click', () => {
  fetch(
      `https://openexchangerates.org/api/latest.json?app_id=cef724ddaeab4b7ba752fa1b58eed431&symbols=${selectConverter.value}`
  )
      .then((response) => response.json())
      .then((data) => {
          console.log(USDInput.value);
          conversionOutput.innerText =
              USDInput.value * data.rates[`${converterLabel.innerText}`];
      });
});
