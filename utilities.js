//
function getInputvalueById(inputId) {
  const userInputString = document.getElementById(inputId);
  let unserInputValue;
  if (userInputString && userInputString.value) {
    unserInputValue = parseFloat(userInputString.value);
  } else {
  unserInputValue = parseFloat(userInputString.innerText);
  }

  userInputString.value = " ";
  return unserInputValue;
}

