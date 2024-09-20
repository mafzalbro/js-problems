const fs = require("fs");

function main() {
  console.log("thanks");

  const json = [
    {
      name: "Afzal",
      age: 24,
    },
    {
      name: "Ali",
      age: 18,
    },
  ];


  1. today=new Date();   
2. var cmas=new Date(today.getFullYear(), 11, 25);   
3. if (today.getMonth()==11 && today.getDate()>25)    
4. {   
5. cmas.setFullYear(cmas.getFullYear()+1);    
6. }     
7. var one_day=1000*60*60*24;   
8. document.write(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+   
9. " days left until Christmas!");  

  // writing files

  fs.writeFile(
    "persons.json",
    JSON.stringify(json, null, 2),
    (err) => err && console.log(err)
  );
}

main();
