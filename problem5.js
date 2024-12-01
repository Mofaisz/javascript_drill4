//Function to get List of Age of all individual
function getAges(data) {
  if (!data) {
    return null;
  }
  //Initialising an empty object
  const ages = {};
  //Iterating values of data
  for (let values of data) {
    //initialising name as key and age as value
    ages[values.name]=values.age;
  }
  //checks if any values is present in ages
  if (Object.keys(ages).length) {
    return ages;
  }
  return null;
}
module.exports = getAges;
