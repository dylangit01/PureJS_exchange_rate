const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rate and update the DOM
const calculate = () => {
 const currencyOneValue = currencyOne.value;
 const currencyTwoValue = currencyTwo.value;

 const url = 'https://api.exchangerate-api.com/v4/latest';

 fetch(`${url}/${currencyOneValue}`)
   .then(res => res.json())
   .then(data => {
    const {rates} = data;
    // console.log(rates);
     const rate = rates[currencyTwoValue];

     rateEl.textContent = `1 ${currencyOneValue} = ${rate} ${currencyTwoValue} `;

     amountTwo.value = (amountOne.value * rate).toFixed(2)
   });
};

const swapCurrency = () => {
  let tempCurr = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = tempCurr;
  calculate()
};

calculate();

// Event listeners:
 currencyOne.addEventListener('change', calculate);
 amountOne.addEventListener('input', calculate);
 currencyTwo.addEventListener('change', calculate);
 amountTwo.addEventListener('input', calculate);
 swap.addEventListener('click', swapCurrency);
