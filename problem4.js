//Fucntion to get names and city of Individual at index 3
function nameAndCityAtIndex3(data) {
  //checks for falsy values and checking it data contains Array or not
  if (!data || !Array.isArray(data)) {
    return null;
  }
  //Initialising an empty object
  const nameAndCity = {};
  //Storing names as key and country as values
  nameAndCity[data[3]["name"]] = data[3]["country"];
  //Checks if objects contains some elements or not
  if (Object.keys(nameAndCity).length > 0) {
    return nameAndCity;
  }
  //If it doesnt contain any elements return null
  return null;
}
module.exports = nameAndCityAtIndex3;
