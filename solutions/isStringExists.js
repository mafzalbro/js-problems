let string = "medium-level JavaScript problems or questions you can use to enhance your skills"

const isStringExists = (string, word) => {
  return string.includes(word)
}

const isExists = isStringExists(string, "medium")

console.log(isExists);

// console.log(string.split(' ').map((w)=>{
//     return w == 'on'? true: false 
//     // console.log(w);
// }).find((x)=> x==true))