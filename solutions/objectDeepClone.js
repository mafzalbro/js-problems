// objectDeepClone.js
// Deep Clone an Object: Write a function to create a deep clone of a nested object.

const objectDeepClone = (obj) => {
    const newObj = JSON.parse(JSON.stringify(obj));
  return { ...newObj, isDuplicate: newObj === obj, isUnique: newObj !== obj };
};

const object = {
  title: "How to Read Effectively",
  description: "This is full guide to explain everything",
  tags: [
    {
      name: "productivity tips",
      slug: "/productivity-tips",
    },
    {
      name: "Time Management",
      slug: "/time-management",
    },
  ],
};

const result = objectDeepClone(object);

console.log({
  object,
  result,
});
