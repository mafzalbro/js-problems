const signUpJSONFunc = (name, email, password) => {
  return { name, email, password };
};

const loginData = signUpJSONFunc("mafzalbro", "mafzalbro@gmail.com", "A1f2Z3a4L@bro")

console.log(loginData);

// Output: {
//     name: "mafzalbro",
//     email: "mafzalbro@gmail.com",
//     password: "A1f2Z3a4L@bro"
// }