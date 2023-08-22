function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var outputValue;
    if (inputUnit === "cm" && outputUnit === "inch") {
      outputValue = inputValue / 2.54;
    } else if (inputUnit === "inch" && outputUnit === "cm") {
      outputValue = inputValue * 2.54;
    } else if (inputUnit === "m" && outputUnit === "ft") {
      outputValue = inputValue * 3.281;
    } else if (inputUnit === "ft" && outputUnit === "m") {
      outputValue = inputValue / 3.281;
    } else {
      outputValue = inputValue; 
    }
    document.getElementById("outputValue").value = outputValue.toFixed(2);
  }
  