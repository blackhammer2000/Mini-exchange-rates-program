/////////////////////////////////////////////MINI EXCHANGE RATES PROGRAM////////////////////////////////////////

const currencies = ["USD", "KES", "EUR"];
const exchangeMap = {
  USD: {
    KES: 118.6,
    EUR: 0.98,
  },
  KES: {
    USD: 0.0084,
    EUR: 0.0082,
  },
  EUR: {
    KES: 121.53,
    USD: 1.02,
  },
};

let dataProcessed = {};

const fromCurrency = prompt("Enter currency to convert FROM:").toUpperCase();
if (currencies.includes(fromCurrency)) {
  const amount = parseFloat(prompt("Enter the Amount to convert:")).toFixed(2);
  if (amount > 0) {
    const toCurrency = prompt("Enter currency to convert TO:").toUpperCase();
    if (currencies.includes(toCurrency)) {
      dataProcessed = {
        fromCurrency,
        toCurrency,
        amount,
      };
    } else {
      alert("Enter a valid (TO) currency.");
    }
  } else {
    alert("Enter a valid amount");
  }
} else {
  alert("Enter a valid (FROM) currency.");
}

if (Object.keys(dataProcessed).length === 3) {
  const baseCurrency = dataProcessed.fromCurrency;
  const quoteCurrency = dataProcessed.toCurrency;
  const amount = dataProcessed.amount;

  const convertedAmount = exchangeMap[baseCurrency][quoteCurrency] * amount;
  const longTransactionID = crypto.randomUUID();
  const lastIndex = longTransactionID.indexOf("-");
  const transactionID = longTransactionID.slice(0, lastIndex);

  alert(
    `${quoteCurrency}${transactionID.toUpperCase()}${baseCurrency} confirmed. You have converted\n${amount}${baseCurrency} to ${quoteCurrency} and it is equal to ${convertedAmount}${quoteCurrency}`
  );
} else {
  alert(
    "An error has occured. Please provide all the correct required information."
  );
}
