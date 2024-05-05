const inputStr = prompt('Zadejte svůj DIČ: ');

const isDIC = (inputStr) => {
  if (inputStr.length < 11 || inputStr.length > 12) {
    return 'neplatné';
  }

  const prefix = inputStr.slice(0, 2);
  if (prefix !== 'CZ') {
    return 'neplatné';
  }

  const digits = inputStr.slice(2);
  if (!validator.isInt(digits)) {
    return 'neplatné';
  }
  return 'platné';
};

document.body.innerHTML += `<p>Vámi zadané DIČ je <strong>${isDIC(
  inputStr,
)}</strong></p>`;
// document.body.innerHTML += '<br />';
// document.body.innerHTML += '<p>Platná DIČ</p>';
// document.body.innerHTML += `<p>CZ123456789 ${isDIC('CZ123456789')}</p>`;
// document.body.innerHTML += `<p>CZ1234567890 ${isDIC('CZ1234567890')}</p>`;

// document.body.innerHTML += '<p>Neplatná DIČ</p>';
// document.body.innerHTML += `<p>123 ${isDIC('123')}</p>`;
// document.body.innerHTML += `<p>ABC ${isDIC('ABC')}</p>`;
// document.body.innerHTML += `<p>1234567890 ${isDIC('1234567890')}</p>`;
// document.body.innerHTML += `<p>001234567890 ${isDIC('001234567890')}</p>`;
// document.body.innerHTML += `<p>1234567890CZ ${isDIC('1234567890CZ')}</p>`;
// document.body.innerHTML += `<p>CZ12345678901 ${isDIC('CZ12345678901')}</p>`;
// document.body.innerHTML += `<p>CZ12345678 ${isDIC('CZ12345678')}</p>`;
// document.body.innerHTML += `<p>CZA23456789 ${isDIC('CZA12345678')}</p>`;
