//  Object Key Capitalization: Write a function to capitalize the keys of an object.

const capitalizeKeys = (obj) => {

  const entries = Object.entries(obj);

  const modifiedObj = {};

  entries.forEach(([key, value]) => {
    const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
    modifiedObj[capitalizedKey] = value;
  });

  return modifiedObj;
};

const object = {
  name: "M Afzal",
  degree: "BSIT",
  section: "IT",
  rollNo: "20-3810",
};

const result = capitalizeKeys(object);

console.log({
  result,
});

// { Name: 'M Afzal', Degree: 'BSIT', Section: 'IT', RollNo: '20-3810' }
