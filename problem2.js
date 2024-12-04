//Function to get hobbies of individual with specific age
function hobbiesByAge(data) {
  //checks for falsy values and checking it data contains Array or not
  if (!data || !Array.isArray(data)) {
    return null;
  }
  // Iterating over the data and c]storing name as key and age and hobbies into another objects
  const hobbiesWithAge = data.reduce((accumulator, initialValue) => {
    accumulator[initialValue.name] = {
      age: initialValue.age,
      hobbies: initialValue.hobbies.join(" "),
    };
    return accumulator; //returns the updated accumulator
  }, {});

  //checks if hobbiesByAge contins elements or not
  if (Object.keys(hobbiesByAge)) {
    return hobbiesWithAge;
  }
  return null; // if it doesn;t contains return null to avoid error
}

module.exports = hobbiesByAge;
