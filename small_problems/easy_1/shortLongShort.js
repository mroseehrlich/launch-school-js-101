/*
** @param {string}, {string}
** Calculate string lengths
** @return shorter {string} + longer {string} + shorter {string}
*/

const shortLongShort = (str1, str2) => {
  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
};

shortLongShort('abc', 'defgh');
shortLongShort('abcde', 'fgh');
shortLongShort('', 'xyz');