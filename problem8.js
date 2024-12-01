//Function to get city and country of every Persons
function getcityAndCountry(data) {
  if (!data) {
    return null;
  }
  //Initialising an empty objects
  const cityAndCountry = {};
  //Iterating values of data
  for (let values of data) {
    //Storing name as key and country,city as values
    cityAndCountry[values.name]={Country:values.country,City:values.city};
  }
  if (Object.keys(cityAndCountry).length > 0) {
    return cityAndCountry;
  }
  return null;
}
module.exports = getcityAndCountry; //Exporting fucntion for further uses
