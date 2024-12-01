//Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
//function to get list of email of users
function getEmailAddress(data) {
  //checks for falsy values
  if (!data) {
    return null;
  }
  //initialising an empty array
  const email = [];
  for (let values of data) {
    email.push(values.email); //appends an email of users
  }
  //checks if list contains elements
  if (email.length > 0) {
    return email;
  }
  //if it doesn't contains,return null
  return null;
}
module.exports = getEmailAddress; //Exporting modules for further use
