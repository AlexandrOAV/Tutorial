const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

setOutput();


select.addEventListener("change", setOutput);

function setOutput() {
    const selectedOptionValue = select.value;
    // console.log('selectedOptionValue', selectedOptionValue);
    const selectedOptionIndex = select.selectedIndex;
    console.log('selectedOptionIndex', selectedOptionIndex);
    console.log(select.options);
  const selectedOptionText = select.options[selectedOptionIndex].text;
    console.log('selectedOptionText', selectedOptionText);
  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}