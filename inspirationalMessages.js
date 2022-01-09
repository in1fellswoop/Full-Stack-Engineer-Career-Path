/* 

You can do it!
You are special
You are kind
You are powerful
You are capable

*/
const subject = "You "; // All inspirational messages will begin with this wording

const areArr = ["are special.", "are kind.", "are powerful.", "are capable.", "are loving.", "are special.", "are great.", "are the best version of yourself.", "a gift"];

const canArr = ["can do it!", "can do anything!", "can do anything you set your mind to.", "can be anything you dream of."];

const possibleEndings = [areArr, canArr];

function randomIndex(upperBound) {
    return Math.floor(Math.random() * upperBound);
}

function messageGenerator() {
    const endingType = possibleEndings[randomIndex(2)];
    const ending = endingType[randomIndex(endingType.length)];

    console.log(subject + ending);
}

messageGenerator();