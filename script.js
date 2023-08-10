const increasedDegree = (num, degree) => {
  return degree === 1 ? num : num * increasedDegree(num, degree - 1);
};
console.log(increasedDegree(3, 3));
