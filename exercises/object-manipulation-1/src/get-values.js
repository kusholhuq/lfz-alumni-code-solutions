/* exported getValues */
function getValues(object) {
  const values = [];
  for (key in object) {
    values.push(object[key]);
  }
  return values;
}
