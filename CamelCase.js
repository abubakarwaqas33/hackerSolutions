function processData(str) {

const newStr = str.split("\n").map(word => word.replace('\r', ''));
for(let i=0; i < newStr.length; i++) {

let splitStr = newStr[i].split(';')
const operation = splitStr[0]
const action = splitStr[1]
const actionName =  splitStr[2]
let wordsArr ;
let finalWord = '';

if(operation == 'S' || operation == 'C') {
       wordsArr = getLetters(actionName)
       finalWord = splitPasspharase(wordsArr, operation, action)
}

console.log(finalWord)
}

}


function splitPasspharase(arr, operation, action=null) {
      const newWords = []  
      if(operation == 'S') {
           arr.map(word => {
                newWords.push(
                        word.toLowerCase().replace('()', '')
            )
        }) 
                     return newWords.join(' ')
      }
     
        else if(operation == 'C') {
            
             arr.map((word,index) => {
           if(action == 'C') {   
                newWords.push(
                 capitalizeFirstLetter(word)
            ) 
            }
            else if(action == 'M' || action == 'V') {
                    newWords.push(
                        index > 0 ? capitalizeFirstLetter(word): word.                        toLowerCase()
                    ) 
            }
            
        }) 
        }
        
        if(action == 'M') 
                   return newWords.join('').concat('()')
         return newWords.join('')
}


function getLetters(str) {

        if(typeof str !== 'string') 
        return 'Value should be string';
       let name = '';
    
    str.split('').map((char, index) => {
            if(index && /^[A-Z]/.test(char)) {
            name =  name + ' '
            name = name + char;
        } else {
            name+=char
        }
            
    })
    return name.split(' ');
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
