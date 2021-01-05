const state = document.querySelector('#state');
const startDate = document.querySelector('#start-date');
const formOutput = document.querySelector('#form-output');
const fieldsets = document.querySelectorAll('fieldset');
const sendFormBtn = document.querySelector('#send-form');
const cleanFormBtn = document.querySelector('#clean-form');
const personal = fieldsets[0].children;
const professional = fieldsets[1].children;

const stateList = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
const stateValues = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

function addOptions() {
  for (let index = 0; index < stateList.length; index += 1) {
    const option = document.createElement('option');
    option.innerText = stateList[index];
    // option.value = stateValues[index];
    option.value = stateList[index];
    state.appendChild(option);
  }
}

function validateDate() {
  let validate = true;
  if (startDate.value) {
    const date = startDate.value.split('/');
    if (date[0] <= 0 || date[0] > 31) {
      alert('O dia deve estar no intervalo de 1 a 31!');
      validate = false;
    }
    if (date[1] <= 0 || date[1] > 12) {
      alert('O mês deve estar no intervalo de 1 a 12!');
      validate = false;
    }
    if (date[2] < 0) {
      alert('O ano não pode ser negativo!');
      validate = false;
    }
  }
  return (validate);
}

function printForm(event) {
  event.preventDefault();
  formOutput.innerHTML = '';
  if (!validateDate()) {
    return;
  }
  for (let index = 0; index < personal.length; index += 1) {
    if (personal[index].value) {
      if (personal[index].type !== 'radio') {
        const output = document.createElement('p');
        output.innerText = `${personal[index -1].innerText} ${personal[index].value}`;
        formOutput.appendChild(output);
      }
      if (personal[index].checked) {
        const typeLabel = document.querySelector('#type');
        const output = document.createElement('p');
        output.innerText = `${typeLabel.innerText} ${personal[index].value}`;
        formOutput.appendChild(output);
      }
    }
  }
  for (let index = 0; index < professional.length; index += 1) {
    if (professional[index].value) {
      const output = document.createElement('p');
      output.innerText = `${professional[index -1].innerText} ${professional[index].value}`;
      formOutput.appendChild(output);
    }
  }
}

function cleanForm() {
  formOutput.innerHTML = '';
  for (let index = 0; index < personal.length; index += 1) {
    if (personal[index].tagName === 'INPUT') {
      if (personal[index].type !== 'radio') {
        personal[index].value = '';
      } else {
        personal[index].checked = false;
      }
    }
  }
  for (let index = 0; index < professional.length; index += 1) {
    if (professional[index].value) {
      professional[index].value = '';
    }
  }
}

addOptions();
sendFormBtn.addEventListener('click', printForm);
cleanFormBtn.addEventListener('click', cleanForm);