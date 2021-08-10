var qns = document.querySelectorAll('.qns');

var btn = document.querySelector('.submit');

var output = document.querySelector('.output');

var quizForm = document.querySelector('.form');

const answers = [ "opt1" , "opt1" , "opt1" , "opt3" , "opt3"];

let score = 0;

quizForm.addEventListener('submit' , (e) => {

    e.preventDefault();

    const userAnswers = new FormData(quizForm);

    var i = 0;

    for(var value of userAnswers.values())
    {
        if(value == answers[i])
        {
            qns[i].style.backgroundColor = 'lightgreen';
            score++;
        }
        else
            qns[i].style.background = 'pink';

        i++;
    }

    output.innerText = "Score : " + score;

    output.style.display = "block";


})