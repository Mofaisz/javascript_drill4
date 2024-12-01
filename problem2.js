//Function to get hobbies of individual with specific age
function hobbiesByAge(data) {
  //Checks for falsy values
  if (!data) {
    return null;
  }
  //Initialising an empty objects
  const hobbiesAndAge = {};
  //Iterating values of data
  for (let values of data) {
    if (!hobbiesAndAge[values.age]) {
      hobbiesAndAge[values.name] = {
        age: values.age,
        hobbies: values.hobbies.join(" ,"),
      };
    }
  } //Checks if objects is empty or not
  if (Object.keys(hobbiesAndAge).length > 0) {
    return hobbiesAndAge;
  } //if it is empty, return null
  return null;
}
module.exports = hobbiesByAge;
