function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
  inputField.value = "";
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  console.log(textElement);
  const textElementValueString = textElement.innerText;
  const textElementValue = textElementValueString;
  //Fixing Error 3
  /* Wrong
  textElementValue;
  */
  return textElementValue; //Fixed
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  // Error 6: Updated value is not showing in UI || Found After Fixing Error 5
  /* Wrong
  textElement.value = newValue;
  */
  textElement.textContent = newValue;
}
