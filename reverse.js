const greeting = 'Hello How Are You?'
function reverseString(text) {
    let reversed = '';
    for(const letter of text){
        console.log(letter);
        reversed = letter+reversed;
    }
  
  
}

const reversed = reverseString(greeting);
console.log(reversed);
