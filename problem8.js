//    Implement a loop to access and log the city and country of each individual in the dataset.
//Fucntion to get city and country of every Persons
function getcityAndCountry(data) {
  if (!data) {
    return null;
  }
  //Initialising an empty objects
  const cityAndCountry = {};
  //Iterating values of data
  for (let values of data) {
    //Storing country as key and city as values
    cityAndCountry[values.country] = values.city;
  }
  if (Object.keys(cityAndCountry).length > 0) {
    return cityAndCountry;
  }
  return null;
}
module.exports = getcityAndCountry; //Exporting fucntion for further uses
