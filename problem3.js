//function to get list of individual who is student and lives in Australia
function getStudentNamesFromAustrailia(data) {
  //Checks for falsy values
  if (!data) {
    return null;
  }
  //Initialising an empty array
  const names = [];
  //Iterating values of data
  for (let values of data) {
    //checks if user is student and lives in Austrailia
    if (values.isStudent && values.country === "Australia") {
      //If both the condition are true append into names list
      names.push(values.name);
    }
  }//checks if names have some values or not
  if (data.length > 0) {
    return names;
  }//If it does not return null
  return null;
}
module.exports = getStudentNamesFromAustrailia;
