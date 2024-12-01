//function to get list of email of users
function getEmailAddress(data) {
  //checks for falsy values
  if (!data) {
    return null;
  }
  //initialising an empty object
  const email = {};
  for (let values of data) {
    email[values.name]=values.email; //storing name as key and email as values
  }
  //checks if email(object) contains elements
  if (Object.keys(email).length > 0) {
    return email;
  }
  //if it doesn't contains,return null
  return null;
}
module.exports = getEmailAddress; //Exporting modules for further use
