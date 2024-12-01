//Function to get List of Age of all individual
function getAges(data) {
  if (!data) {
    return null;
  }
  //Initialising an empty array
  const ages = [];
  //Iterating values of data
  for (let values of data) {
    //Appends age into ages list
    ages.push(values.age);
  }
  //checks if any values is present in ages
  if (ages.length) {
    return ages;
  }
  return null;
}
module.exports = getAges;
