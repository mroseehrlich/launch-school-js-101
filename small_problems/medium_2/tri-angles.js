const isValid = (angles) => {
  return (
    angles.reduce((sum, angle) => sum + angle) === 180 &&
    angles.every(angle => angle > 0)
  );
};

const triangleType = (angles) => {
  if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  } else {
    return 'acute';
  }
};

const triangle = (angle1, angle2, angle3) => {
  let angles = [angle1, angle2, angle3];
  if (!isValid(angles)) return 'invalid';

  return triangleType(angles);
};

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
