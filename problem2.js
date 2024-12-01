//Fucntion to get hobbies of individual with specific age
function hobbiesByAge(data) {
  if (!data) {
    return null;
  }
  //Initialising an empty objects
  const hobbiesAndAge = {};
  //Iterating values of data
  for (let values of data) {
    //Checks if keys(of age) is initialised or not
    if (!hobbiesAndAge[values.age]) {
      //If it is not initialise it will,and create an empty array
      hobbiesAndAge[values.age] = [];
    }
    //If it is initialised  it push hobbies onto that values of specific keys(age)
    hobbiesAndAge[values.age].push(values.hobbies.join(" , "));
  } //Checks if objects is empty or not
  if (Object.keys(hobbiesAndAge).length > 0) {
    return hobbiesAndAge;
  } //if it is empty return null
  return null;
}
module.exports = hobbiesByAge;
