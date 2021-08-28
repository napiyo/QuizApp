var eye = document.querySelector('.eyeIcon');
var password = document.querySelector('#password');
var openEyesrc = "https://img.icons8.com/ios-glyphs/30/000000/angry-eye.png";
var closeEyesrc = "https://img.icons8.com/material-two-tone/24/000000/closed-eye.png";
// to show password
eye.addEventListener('click', () => {

    if (eye.src == openEyesrc) {
        eye.src = closeEyesrc;

        password.type = "Text"
    } else {

        password.type = "password"
        eye.src = openEyesrc;
    }

})
var startQuizbtn = document.querySelector('.takeQuiz');
// test duration for test
var timeForTest = 2;


startQuizbtn.disabled = true;
// aunthentication
password.addEventListener('input', () => {
    alertForWrongPassword.style.display = "none";
    if (password.value) {
        startQuizbtn.disabled = false;
    } else {
        startQuizbtn.disabled = true;
    }

})
var auntheticationContainer = document.querySelector('.aunthetication');
var questionContainer = document.querySelector('.questionContainer');
var alertForWrongPassword = document.querySelector('.alertForWrongPassword');
alertForWrongPassword.style.display = "none";
startQuizbtn.addEventListener('click', () => {

    if (password.value == 123) {
        auntheticationContainer.style.display = "none";
        questionContainer.style.display = "block";
        var indexOfCurrentQuestion = random(currentData.length);
        digitalClock()
        setTimeout(() => {
            questionContainer.classList.toggle("results")
            questionContainer.innerText = `Your Score is: ${score}
            you answerd correct, of ${rightanswerCount}/${quizData.length} Questions `;
            digitalClockText.style.display = "none";
        }, timeForTest * 60000)
        LoadQuiz(undefined, indexOfCurrentQuestion)
    } else {
        alertForWrongPassword.style.display = "block";
    }

})
password.addEventListener('keyup', (e) => {
    if (password.value) {
        if (e.keyCode === 13) {
            if (password.value == 123) {
                startQuizbtn.click()
            } else {
                alertForWrongPassword.style.display = "block";

            }
        }
    }
})

// question Data
const quizData = [{
        questionData: "What is the built in library function to adjust the allocated dynamic memory size.",
        option1: "A - malloc",
        option2: "B - calloc",
        option3: "C - realloc",
        option4: "D - resize",
        correctAns: 3,
        marks: 2
    },
    {
        questionData: "Which of the following is a legal identifier in java ?",
        option1: "A. 2variable",
        option2: "B. #myvar",
        option3: "C. +@$var",
        option4: "D. $_myvar",
        correctAns: 4,
        marks: 3
    },
    {
        questionData: "In C, what are the various types of real data type (floating point data type)?",
        option1: "A - Float, long double",
        option2: "B - long double, short int",
        option3: "C - float, double, long double",
        option4: "D - short int, double, long int, float",
        correctAns: 3,
        marks: 2
    },
    {
        questionData: "For a structure, if a variable behave as a pointer then from the given below operators which operator can be used to access data of the structure via the variable pointer?",
        option1: "A - .",
        option2: "B - %",
        option3: "C - ->",
        option4: "D - #",
        correctAns: 3,
        marks: 1
    },
    {
        questionData: "Which statement can print \n on the screen?",
        option1: "A - printf(\"\\n\");",
        option2: "B - printf(\"n\");",
        option3: "C - printf(\"n\");",
        option4: "D - printf(\'\\n\');",
        correctAns: 1,
        marks: 2
    },

]

var question = document.querySelector('.question');
var currentData = quizData;
// generate random number
function random(a) {
    return Math.floor(Math.random() * a);

}
// count score
var score = 0;
var rightanswerCount = 0;

var nextbtn = document.querySelector('#nextbtn');
var optionA = document.querySelector('#optionAText');
var optionB = document.querySelector('#optionBText');
var optionC = document.querySelector('#optionCText');
var optionD = document.querySelector('#optionDText');
var marksDisplay = document.querySelector('#marksForEachQuestion')
var questionContainer = document.querySelector('.questionContainer');
const answerGiven = document.querySelectorAll('input[name="options"]');
var currentQ;

//load next Random question
function LoadQuiz(answer, index) {
    if (answer) {
        if (currentQ) {
            if (answer.value == currentQ.correctAns) {

                score += currentQ.marks;
                rightanswerCount += 1;
            }
        }
    }

    currentQ = currentData[index];
    var currentdata1 = [];



    //delete question for question set so It wont display again
    deleteQuestiontemp()


    function deleteQuestiontemp() {

        currentData.forEach(element => {
            if (currentData.indexOf(element) === index) {
                // continue
            } else {
                currentdata1.push(element)
            }


        });
        currentData = currentdata1
    }


    //display question
    if (currentQ) {

        question.innerText = currentQ.questionData;
        optionAText.innerText = currentQ.option1;
        optionBText.innerText = currentQ.option2;
        optionCText.innerText = currentQ.option3;
        optionDText.innerText = currentQ.option4;
        marksDisplay.innerText = currentQ.marks;
        answerGiven.forEach(element => {
            element.checked = false;
        });


    } else {
        questionContainer.classList.toggle("results")
        questionContainer.innerText = `Your Score is: ${score}
        you answerd correct, of ${rightanswerCount}/${quizData.length} Questions `;
        digitalClockText.style.display = "none";
    }
}




var PleaseSelectAnswer = document.querySelector('.PleaseSelectAnswer');

nextbtn.addEventListener('click', () => {
    PleaseSelectAnswer.style.display = "none";
    var answerSelected = false;
    answerGiven.forEach(element => {
        if (element.checked) {

            var indexOfCurrentQuestion = random(currentData.length);
            LoadQuiz(element, indexOfCurrentQuestion);

            answerSelected = true;
        }
    });
    if (!answerSelected) {
        PleaseSelectAnswer.style.display = "block";
        setTimeout(() => {
            PleaseSelectAnswer.style.display = "none"
        }, 1000)

    }
});
//clock
setInterval(() => {
    d = new Date(); //object of date()

    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
var digitalClockText = document.querySelector(".DigitalClock");
digitalClockText.innerText = `${timeForTest} : 00 `;

function digitalClock() {
    var m = timeForTest;
    var s = 0;

    setInterval(() => {
        if (m >= 0) {
            if (m == 0 && s < 59) {
                if (s % 2) {
                    digitalClockText.style.background = "red";
                    digitalClockText.style.boxShadow = "0px 0px 10px red";

                } else {
                    digitalClockText.style.background = "none";
                }
                digitalClockText.innerText = `${m} : ${s}`;
            }
            if (m == 0 && s < 0) {
                digitalClockText.innerText = `Times up`;
                digitalClockText.style.background = "red";
            }
            if (s < 0) {
                m--;
                s = 59;
                digitalClockText.innerText = `${m} : ${s}`;
                s--;
            } else {
                digitalClockText.innerText = `${m} : ${s}`;
                s--;
            }
        }


    }, 1000);

}

// Handling Modals

//Modal for instructions
var modalForinstruction = document.querySelector(".modalForinstruction");
var closeModalbtn = document.querySelector(".closeModalbtn");
var Modalbtn = document.querySelector(".Modalbtn");
Modalbtn.onclick = function() {
    modalForinstruction.style.display = "block"





}
closeModalbtn.onclick = function() {
        modalForinstruction.style.display = "none";



    }
    //Modal for claculater
var calcbtn = document.querySelector(".calcbtn");
var container = document.querySelector(".container");
calcbtn.onclick = () => { container.style.display = 'block'; }

var closecalc = document.querySelector("#closecalc");
closecalc.onclick = () => {

    container.style.display = 'none';

}


//Calculater
var screen = document.querySelector(".screen");
var header = document.querySelector(".header");
var claculater = document.querySelector(".claculater");
var keys = document.querySelectorAll(".keypad > div > button");
var screenValue = "";
var backspaceImg = document.getElementById('backspaceImg')
for (i of keys) {
    i.addEventListener('click', (e) => {
        var btntext = e.target.innerText;
        if (screenValue == "Syntax Error") {
            screenValue = "";
        }
        if (btntext == "=") {
            try {
                screenValue = eval(screen.innerText);
            } catch {
                screenValue = "Syntax Error"

            }
        } else if (btntext == 'AC') {

            screenValue = "";
        } else if (e.target.id == "backspace") {
            screenValue = screenValue.slice(0, -1);
        } else {
            screenValue += btntext
        }
        screen.innerText = screenValue;
    })
}
backspaceImg.addEventListener('click', () => {
    screenValue = screenValue.slice(0, -1);
    screen.innerText = screenValue;
})

var initialX, initialY, CurrentX, CurrentY;
var active = false;
var xOffset = 0;
var yOffset = 0;

window.addEventListener('mousedown', dragstart, false)
window.addEventListener('mousemove', ondrag, false)
window.addEventListener('mouseup', dragend, false)
window.addEventListener('touchstart', dragstart, false)
window.addEventListener('touchmove', ondrag, false)
window.addEventListener('touchend', dragend, false)

function dragstart(e) {
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }
    if (e.target == header) {
        active = true;
    }
}

function ondrag(e) {
    if (active) {
        e.preventDefault();
        if (e.type === "touchmove") {
            CurrentX = e.touches[0].clientX - initialX
            CurrentY = e.touches[0].clientY - initialY

        } else {
            CurrentX = e.clientX - initialX
            CurrentY = e.clientY - initialY
        }
        xOffset = CurrentX;
        yOffset = CurrentY;
        container.style.top = CurrentY + 'px';
        container.style.left = CurrentX + 'px';

    }
}

function dragend(e) {
    active = false;
    initialX = CurrentX;
    initialY = CurrentY;
}
//to check if app is minimize or tab is changed
var malpractice = document.querySelector('#malpractice');
var malpracticeClose = document.querySelector('#malpractice > div');
malpracticeClose.addEventListener('click', () => {
    malpractice.style.display = "none";
})
var malpracticeCount = 0;
document.addEventListener("visibilitychange", () => {

    if (questionContainer.style.display == "block") {
        if (document.visibilityState == "hidden") {
            malpractice.style.display = "block";
            if (malpracticeCount == 0) {
                malpracticeCount++;


            } else {

                malpractice.innerText = "You're disqualified";
                malpracticeClose.style.display = "none";
                questionContainer.style.display = "none";
                digitalClockText.style.display = "none";

            }
        }

    }

})

// PREVENT CLIPBOARD COPYING
var CopyNotAllowed = document.createElement('div');
CopyNotAllowed.style.position = "absolute";
CopyNotAllowed.style.bottom = "30px";
CopyNotAllowed.innerHTML = "Copy/Paste, right click is disabled";
CopyNotAllowed.style.background = "orange";
CopyNotAllowed.style.padding = "20px";
CopyNotAllowed.style.left = "45%";
CopyNotAllowed.style.display = "none";
CopyNotAllowed.style.borderRadius = "5px";

document.body.appendChild(CopyNotAllowed);
// PREVENT CONTEXT MENU FROM OPENING
document.addEventListener("contextmenu", function(evt) {
    CopyNotAllowed.style.display = "block";
    setTimeout(() => {
        CopyNotAllowed.style.display = "none";

    }, 2000)
    evt.preventDefault();
}, false);
document.addEventListener("copy", function(evt) {
    // Change the copied text if you want
    evt.clipboardData.setData("text/plain", "Copying is not allowed on this webpage Created By Narendra");
    CopyNotAllowed.style.display = "block";
    setTimeout(() => {
        CopyNotAllowed.style.display = "none";

    }, 2000)


    // Prevent the default copy action
    evt.preventDefault();
}, false);