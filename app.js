const howOld = (age, year) => {
  const currentYear = new Date().getFullYear();
  const yearDiff = currentYear - year;

  if (yearDiff > age) {
    return `The year ${year} was ${yearDiff - age} years before you were born`;
  } else if (year > currentYear) {
    return `You will be ${age + (year - currentYear)} in the year ${year}`;
  } else {
    return `You were ${age - yearDiff} in the year ${year}`;
  }
};
console.log(howOld(23, 2003));

