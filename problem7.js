//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
//Function to get names and email of persons whose age is 25
function namesAndEmailsOfAge25(data) {
  //Initialising an empty objects
  const namesAndEmail = {};
  //Iterating the values of data
  for (let values of data) {
    //Checks if person age is 25
    if (values.age === 25) {
      //if condition becomes true name as key and email as values will be initialised in namesAndEmails
      namesAndEmail[values.name] = values.email;
    }
  } //Checks if objects containing some values or not
  if (Object.keys(namesAndEmail).length) {
    return namesAndEmail;
  } //If it is not containing any values return null
  return null;
}
module.exports = namesAndEmailsOfAge25;
