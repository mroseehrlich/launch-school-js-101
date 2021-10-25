function isColorValid(color) {
  return color === "blue" || color === "green";
}

function isColorValid(color) {
  return color === "blue" || color === "green" ? true : false;
}

const isColorValid = color => ["blue", "green"].includes(color);
