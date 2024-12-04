//function to get list of email of users
function getEmailAddress(data) {
  //checks for falsy values and checking it data contains Array or not
  if (!data || !Array.isArray(data)) {
    return null;
  }

  //Function to map array of objects to an objects with name as key and email as values
  const emails = data.reduce((accumulator, initialValue) => {
    //storing name as key and email as value in accumulator
    accumulator[initialValue.name] = initialValue.email;
    // return the accumulator
    return accumulator;
  }, {});

  //checks if objects have some values or not
  if (Object.keys(emails).length > 0) {
    return emails;
  }

  return null;
}
module.exports = getEmailAddress; //Exporting modules for further use
