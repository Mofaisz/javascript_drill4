//Fucntion to get First hobby of Individual
function firstHobby(data) {
  //Initialising an empty array
  const hobby = [];
  //Iterating values of data
  for (let values of data) {
    //apends into hobby list
    hobby.push(values.hobbies[0]);
  } //Checks if hobby contains elements or not
  if (hobby.length > 0) {
    return hobby;
  }
  return null;
}
module.exports = firstHobby;
