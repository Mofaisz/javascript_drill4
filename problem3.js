//function to get list of individual who is student and lives in Australia
function getStudentNamesFromAustrailia(data) {
  //checks for falsy values and checking it data contains Array or not
  if (!data || !Array.isArray(data)) {
    return null;
  }
  /* Iterates over the value of data and 
  after doing certain operation stores
   the value into complete details which is array
  */
  const studentsFromAutrailia = data.filter((value) =>{
    return value.isStudent && value.country === "Australia" ;
  });
  
  //iterates over the studentsFromAutrailia and extracts only the name 
  const name = studentsFromAutrailia.map((value =>{
    return value.name;
  }))

  // checks if name contains any value or not
  if (name.length > 0) {
    return name;
  } //If it does not return null
  return null;
}
module.exports = getStudentNamesFromAustrailia;
