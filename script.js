let lbs = document.getElementById('lbs');
let kg = document.getElementById('kg');
let convertButton = document.getElementById('convert');
let resetButton = document.getElementById('reset');
let swapButton = document.getElementById('swap');
let labelFrom = document.getElementById('label-from');
let labelTo = document.getElementById('label-to');
let mainHeadline = document.querySelector('h1');

// Mass function
function massFunc() {
  let massButton = document.getElementById('mass-button');
  massButton.addEventListener('click', function () {
    labelFrom.innerHTML = 'Lbs';
    labelTo.innerHTML = 'Kg';
    mainHeadline.innerHTML = 'Convert Pounds to Kilograms';
    resetValues();
  });
}

// Length function
function length() {
  let lengthButton = document.getElementById('length-button');
  lengthButton.addEventListener('click', function () {
    labelFrom.innerHTML = 'Miles';
    labelTo.innerHTML = 'Kilometers';
    mainHeadline.innerHTML = 'Convert Miles to Kilometers';
    resetValues();
  });
}

// Temperature function
function temperature() {
  let temperatureButton = document.getElementById('temperature-button');
  temperatureButton.addEventListener('click', function () {
    labelFrom.innerHTML = 'F°';
    labelTo.innerHTML = 'C°';
    mainHeadline.innerHTML = 'Convert Fahrenheit to Celsius';
    resetValues();
  });
}

function convert(value) {
  const coefficientMass = 0.45359237;
  let newValue;
  if (labelFrom.innerHTML == 'Lbs') {
    newValue = value * coefficientMass;
  } else if (labelFrom.innerHTML == 'Kg') {
    newValue = value / coefficientMass;
  }

  const coefficientLength = 1.60934;
  if (labelFrom.innerHTML == 'Miles') {
    newValue = value * coefficientLength;
  } else if (labelFrom.innerHTML == 'Kilometers') {
    newValue = value / coefficientLength;
  }

  if (labelFrom.innerHTML == 'F°') {
    newValue = ((value - 32) * 5) / 9;
  } else if (labelFrom.innerHTML == 'C°') {
    newValue = (value * 9) / 5 + 32;
  }
  return newValue.toFixed(5);
}

function newInput() {
  if (lbs.value != '' && !isNaN(lbs.value)) {
    kg.value = convert(lbs.value);
  } else {
    kg.value = '';
  }
}

function resetValues() {
  kg.value = '';
  lbs.value = '';
}

convertButton.addEventListener('click', newInput);
resetButton.addEventListener('click', function (e) {
  resetValues();
});

function swap() {
  resetValues();

  // Mass
  if (labelFrom.innerHTML == 'Lbs') {
    labelFrom.innerHTML = 'Kg';
    labelTo.innerHTML = 'Lbs';
    mainHeadline.innerHTML = 'Convert Kilograms to Pounds';
  } else if (labelFrom.innerHTML == 'Kg') {
    labelFrom.innerHTML = 'Lbs';
    labelTo.innerHTML = 'Kg';
    mainHeadline.innerHTML = 'Convert Pounds to Kilograms';
  }

  // Length
  if (labelFrom.innerHTML == 'Miles') {
    labelFrom.innerHTML = 'Kilometers';
    labelTo.innerHTML = 'Miles';
    mainHeadline.innerHTML = 'Convert Kilometers To Miles';
  } else if (labelFrom.innerHTML == 'Kilometers') {
    labelFrom.innerHTML = 'Miles';
    labelTo.innerHTML = 'Kilometers';
    mainHeadline.innerHTML = 'Convert Miles to Kilometers';
  }

  // Temperature
  if (labelFrom.innerHTML == 'F°') {
    labelFrom.innerHTML = 'C°';
    labelTo.innerHTML = 'F°';
    mainHeadline.innerHTML = 'Convert Celsius to Fahrenheit';
  } else if (labelFrom.innerHTML == 'C°') {
    labelFrom.innerHTML = 'F°';
    labelTo.innerHTML = 'C°';
    mainHeadline.innerHTML = 'Convert Fahrenheit to Celsius';
  }
}

swapButton.addEventListener('click', swap);

massFunc();
length();
temperature();
