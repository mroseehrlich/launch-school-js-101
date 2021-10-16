const ordinalEndings = (yearString) => {
  if (yearString > 10 && yearString < 20) {
    return 'th';
  } else if (yearString[yearString.length - 1] === '1') {
    return 'st';
  } else if (yearString[yearString.length - 1] === '2') {
    return 'nd';
  } else if (yearString[yearString.length - 1] === '3') {
    return 'rd';
  } else {
    return 'th';
  }
};

const century =  (year) => {
  let century;
  if (year < 100) {
    century = String(1);
  } else if (year % 100 === 0) {
    century = String(year / 100);
  } else {
    century = String(Math.ceil(String(year / 100)));
  }

  let yearOfCentury = century.slice(century.length - 2);
  let ending = ordinalEndings(yearOfCentury);
  return century + ending;
};


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"