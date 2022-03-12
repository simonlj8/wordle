

let guess = "HALLÅ";
let word =  "CYKLA";


let check = (guess, word) => {
    let guessLetter = guess.split('');
    let wordLetter = word.split('');
    let output = [];
    //let correctButNotRight = [];
    for (let i = 0; i < guessLetter.length; i++) {
        if (guessLetter[i] === wordLetter[i]) {
            output.push( {
                letter: guessLetter[i],
                result: "correct",
               
            });
            
        }
        else if (word.includes(guessLetter[i])) {
            output.push( {
                letter: guessLetter[i],
                result: "misplaced",
            });
        } else {
            output.push({
                letter: guessLetter[i],
                result: "incorrect",
            });
        }
        
       // let guessLetter = guess.charAt(i);
       // let wordLetter = word.charAt(i);
}
console.log(output);
return output;
}


/*
let check = (guess, word) => {
 
    let output = [];
    //let correctButNotRight = [];

for (let i = 0; i < guess.length; i++) {
   
    let guessLetter = guess.charAt(i);
    let wordLetter = word.charAt(i);

    
    let output = [];
    //let correctButNotRight = [];
    if (guessLetter === wordLetter) {
      output.push( {
          letter: guessLetter[i],
          result: "Right",
      });
    }
    else if (word.indexOf(guessLetter) != -1) {
      output.push( {
          letter: guessLetter[i],
          result: "missplaced",
      });
    }
    else {
      output.push({
          letter: guessLetter,
          result: "fail",
      });
   
    }
    console.log(output);
}
console.log(output);
  return output;
}*/
    check(guess, word);
   // module.exports = check;