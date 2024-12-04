//Function to get First hobby of every person
function firstHobby(data) {
  //checks for falsy values and checking it data contains Array or not
  if (!data || !Array.isArray(data)) {
    return null;
  }

  // Iterates over the data , creates an objects and stores name as key and first hobbies as value
  const hobby = data.reduce((accumulator, value) => {
    accumulator[value.name] = value.hobbies[0];
    // returns the updated accumulator
    return accumulator;
  }, {});

  //Checks if hobby contains elements or not
  if (Object.keys(hobby).length > 0) {
    return hobby;
  }
  return null;
}

// Exports function for further use
module.exports = firstHobby;
