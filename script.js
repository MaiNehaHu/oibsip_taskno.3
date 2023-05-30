const calculate = () => {
  const numberTemp = document.getElementById("temp").value;
  console.log("input " + numberTemp);

  const temp_select = document.getElementById("temp_selection");
  const Temp = temp_select.options[temp_select.selectedIndex].index;
  console.log("index " + Temp);

  let result;

  if (Temp === 0) {
    result = celciusToFeh(numberTemp);
    document.getElementById(
      "result"
    ).innerHTML = `<h1>= <span style="font-family: 'Monoton', cursive; font-size: 70px;"> ${result} </span> &deg; Fahrenheit</h1>`;
  } else {
    result = fehToCelcius(numberTemp);
    document.getElementById(
      "result"
    ).innerHTML = `<h1>= <span style="font-family: 'Monoton', cursive; font-size: 70px;"> ${result} </span> &deg; Celcius</h1>`;
  }
};

function celciusToFeh(numberTemp) {
  const cel = numberTemp;
  return Math.round((cel * 9) / 5 + 32);
}

function fehToCelcius(numberTemp) {
  const feh = numberTemp;
  return Math.round(((feh - 32) * 5) / 9);
}
