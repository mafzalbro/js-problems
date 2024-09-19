//  Counting Characters: Write a function to count the occurrences of each character in a given string.


const characterOccurenceCounter = (string) => {

    const stringArr = string.split('')

    const occurrences = {}
    
    stringArr.forEach(character => !occurrences[character] ? occurrences[character] = 1 : occurrences[character] = occurrences[character] + 1)

    return occurrences
}

const string = 'This is why we are happy my dear!'

const result = characterOccurenceCounter(string)

console.table({
    result
});