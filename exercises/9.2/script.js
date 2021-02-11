function oldestFromFirstSpecies(id) {
  const foundSpeciesResponsibleFor = employees.find((currentEmp) => currentEmp.id === id).responsibleFor[0];
  const foundResidents = animals.find((currentAnimal) => currentAnimal.id === foundSpeciesResponsibleFor).residents;
  foundResidents.reduce((olderAnimal, currentAnimal) => {
    if (olderAnimal.age <= currentAnimal.age) {
      return currentAnimal
    }
  })
}

