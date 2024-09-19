// encrypt

const encryptText = (text) => {
    const arr = text.split('')
    return arr.map(char => {
        return `&#128${char.charCodeAt()}`
    }).join('')    
}

const encryptedText = encryptText('Thanks')
console.log({
    encryptedText
});



const decryptText = (emojis) => {

    if(!emojis.includes('&#')){
        const array = emojis.split('')
        return array.map(emoji => {
            let code = emoji.codePointAt(0)
            code = Number(code).toString().slice(3, 5)
            
            console.log(code);
            
            console.log(String.fromCharCode(code));
            
             
            return String.fromCharCode(code)
            
        })
    } else {

        const arr = emojis.split('&#128')
    
        return arr.map(code => {
            if(code !== ''){
                return String.fromCharCode(code)
            }
        }).join('')
    }
    

}

const decryptedText = decryptText('&#12884&#128104&#12897&#128110&#128107&#128115')
const decryptedText1 = decryptText(encryptedText)
console.log({
    decryptedText,
    decryptedText1
});

