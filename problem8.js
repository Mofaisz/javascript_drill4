// Function to get city and country of every Persons
function getcityAndCountry(data) {
  //checks for falsy values and checking it data contains Array or not
  if (!data || !Array.isArray(data)) {
    return null;
  }

  //  Iterates over the data, creates an object to stores name as key and city,country as values 
  const cityAndCountry = data.reduce((accumultor, value) => {
    accumultor[value.name] = { city: value.city, country: value.country };

    // returns the updated accumulator
    return accumultor;
  }, {});

  // checks if objects contains some values or not 
  if (Object.keys(cityAndCountry).length > 0) {
    return cityAndCountry;
  }
  return null;
}

//Exporting fucntion for further uses
module.exports = getcityAndCountry; 
