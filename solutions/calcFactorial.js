// ---- Q2. you have to take an array and cover all the arguments as much as it can be and find factorial to it ------

const calcFactorial = (data) => {
    const output = data.reduce((total, current)=>{
        return total * current
    })
    console.log(output);
}

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
calcFactorial(data)


