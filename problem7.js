//Function to get names and email of persons whose age is 25
function namesAndEmailsOfAge25(data) {
  //checks for falsy values and checking it data contains Array or not
  if (!data || !Array.isArray(data)) {
    return null;
  }

  // Iterates over the value of data, creates an objects and storename as key and email as values
  const namesAndEmail = data.reduce((accumulator, value, index) => {
    if (value.age == 25) {
      accumulator[value.name] = value.email;
    }
    // returns the updated accumulator
    return accumulator;
  }, {});

  //Checks if objects containing some values or not
  if (Object.keys(namesAndEmail).length) {
    return namesAndEmail;
  } //If it is not containing any values return null
  return null;
}

module.exports = namesAndEmailsOfAge25;
