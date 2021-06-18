export const required = (value) => {
  if (value) return undefined;

  return "field is required";
};

export const maxLenghtCreator = (maxLenght) => (value) => {
  if (value.length > maxLenght) return `max lenght is ${maxLenght} symbols`;
  return undefined;
};
