const state = document.querySelector('#state');
const startDate = document.querySelector('#start-date');

const stateList = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
const stateValues = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

function addOptions() {
  for (let index = 0; index < stateList.length; index += 1) {
    const option = document.createElement('option');
    option.innerText = stateList[index];
    option.value = stateValues[index];
    state.appendChild(option);
  }
}

function validateDate(event) {
  const date = event.target.value.split('/');
  if (date[0] <= 0 || date[0] > 31) {
    alert('O dia deve estar no intervalo de 1 a 31!');
  }
  if (date[1] <= 0 || date[1] > 12) {
    alert('O mês deve estar no intervalo de 1 a 12!');
  }
  if (date[2] < 0) {
    alert('O ano não pode ser negativo!');
  }
}



addOptions();
startDate.addEventListener('change', validateDate);