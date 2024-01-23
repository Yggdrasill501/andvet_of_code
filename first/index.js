const fs = require('fs');

function readFile(fileName) {
    try {
        const data = fs.readFileSync(fileName, 'utf8');
        return data;
    } catch (err) {
        console.error(err);
        return 'File not found';
    }
}


function isDigit(stringParam){
    // if char is digit return the digit
}
 

function readLineAsList(fileString){    
    // list split on '\n'
    // return list of strings
}


function getResults(){
    // read file
    const fileString = readFile('input.txt');
    
    // Make List of strings
    const listOfStrings = readLineAsList(fileString)

    //list of lines

    //for each string 
    //  new empty list 
    //  for each char in string
    //    if char is digit
    //      append char on empty list
    //
    //  each char in list stick togerther
    //
    //ech char in list of line plus together.

    console.log(results);
         
}

getResults()

