//Fucntion to get names and city of person at index 3
function nameAndCityAtIndex3(data) {
  //checks for falsy values and checking it data contains Array or not
  if (!data || !Array.isArray(data)) {
    return null;
  }

  // Iterates over the data and creates an object to store name as key and city as value
  const nameAndCity = data.reduce((accumulator, value, index) => {
    if (index == 3) {
      accumulator[value.name] = value.city;
    }
    // returns updated accumulator
    return accumulator;
  }, {});

  //Checks if objects contains some elements or not
  if (Object.keys(nameAndCity).length > 0) {
    return nameAndCity;
  }
  //If it doesnt contain any elements return null
  return null;
}

module.exports = nameAndCityAtIndex3;
