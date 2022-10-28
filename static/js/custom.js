var validMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var monthCodeArray = [
  "0",
  "3",
  "3",
  "6",
  "1",
  "4",
  "6",
  "2",
  "5",
  "0",
  "3",
  "5",
];

function compareDate(birthDate) {
  // determine if the date is not in the future
  var time1 = new Date(birthDate);
  var today = new Date();
  var diff = today - time1;

  if (diff > 0) {
    return (valid = false);
  } else if (diff < 0) {
    return (valid = true);
  } else {
    return (valid = false);
  }
}
