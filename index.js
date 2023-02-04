var trueOrFalseString = 'True or False:'

var questionsArr = [
    { question: trueOrFalseString + "German chocolate cake was invented in Texas", 
    answer: true },
    { question: trueOrFalseString + 'Dead skin cells are a main ingredient in household dust.', 
    answer: true },
    { question: trueOrFalseString + 'When a bat leaves a cave, it turns right.', 
    answer: false },
    { question: trueOrFalseString + 'Babies and adults have the same number of bones', 
    answer: false },
    { question: trueOrFalseString + 'The mythical unicorn is the national animal of Scotland.', 
    answer: true }
]

console.log(questionsArr);

function runQuiz() {
    var score = 0
    for (var i = 0; i < questionsArr.length; i++) {
        var userAnswer = confirm(questionsArr[i].question);
        if (userAnswer == questionsArr[i].answer) 
        {score++;}
    }
    var percent = (score / questionsArr.length) * 100;
    var roundedPercent = Math.round(percent);
    alert("You scored a " + roundedPercent + "%!");
}