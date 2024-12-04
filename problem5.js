//Function to get List of Age of all individual
function getAges(data) {
  //checks for falsy values and checking it data contains Array or not
  if (!data || !Array.isArray(data)) {
    return null;
  }
  //Iterates over data, creates an objects and storing name as key and age as values
  const ages = data.reduce((accumulator, value) => {
    // storing name as key and age as value
    accumulator[value.name] = value.age;
    // return the updated acccumulator
    return accumulator;
  }, {});
  //checks if any values is present in ages
  if (Object.keys(ages).length) {
    return ages;
  }
  return null;  
}

module.exports = getAges;
