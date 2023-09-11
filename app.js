
var questionList = [
    {
        question: "Which river is the longest in Pakistan?",
        a: "Jhelum",
        b: "Indus",
        c: "Ravi",
        d: "Sutlej",
        ans: "answer2"
    },
    {
        question: "What is the capital city of Pakistan?",
        a: "Karachi",
        b: "Lahore",
        c: "Islamabad",
        d: "Peshawar",
        ans: "answer3"
    },
    {
        question: "Which mountain range is located in the northern part of Pakistan?",
        a: "Himalayas",
        b: "Andes",
        c: "Alps",
        d: "Karakoram",
        ans: "answer4"
    },
    {
        question: "Pakistan shares its eastern border with which country?",
        a: "India",
        b: "Afghanistan",
        c: "China",
        d: "Iran",
        ans: "answer1"
    },
    {
        question: "What is the official language of Pakistan?",
        a: "Punjabi",
        b: "Urdu",
        c: "Pashto",
        d: "Sindhi",
        ans: "answer2"
    },
    {
        question: "Which Pakistani city is known as the 'City of Gardens'?",
        a: "Lahore",
        b: "Karachi",
        c: "Islamabad",
        d: "Faisalabad",
        ans: "answer1"
    },
    {
        question: "Pakistan became an independent nation on which date?",
        a: "August 14, 1947",
        b: "March 23, 1940",
        c: "July 30, 1947",
        d: "September 6, 1965",
        ans: "answer1"
    },
    {
        question: "Who is the founder of Pakistan?",
        a: "Allama Iqbal",
        b: "Muhammad Ali Jinnah",
        c: "Liaquat Ali Khan",
        d: "Benazir Bhutto",
        ans: "answer2"
    },
    {
        question: "Which province in Pakistan is known as the 'Land of Five Rivers'?",
        a: "Punjab",
        b: "Sindh",
        c: "Balochistan",
        d: "Khyber Pakhtunkhwa",
        ans: "answer1"
    },
    {
        question: "What is the highest peak in Pakistan and the second-highest in the world?",
        a: "Mount Everest",
        b: "Mount K2 (Mount Godwin-Austen)",
        c: "Mount Kangchenjunga",
        d: "Mount Lhotse",
        ans: "answer2"
    },
    {
        question: "What is the national animal of Pakistan?",
        a: "Lion",
        b: "Elephant",
        c: "Markhor",
        d: "Monkey",
        ans: "answer3"
    },
    {
        question: "Which province is known as the 'Land of the Pure'?",
        a: "Sindh",
        b: "Balochistan",
        c: "Khyber Pakhtunkhwa",
        d: "Punjab",
        ans: "answer4"
    },
    {
        question: "What is the highest mountain in Pakistan and the ninth-highest in the world?",
        a: "Nanga Parbat",
        b: "Rakaposhi",
        c: "Broad Peak",
        d: "Gasherbrum I",
        ans: "answer1"
    },
    {
        question: "Which Pakistani cricketer is known as the 'Sultan of Swing'?",
        a: "Shahid Afridi",
        b: "Wasim Akram",
        c: "Inzamam-ul-Haq",
        d: "Waqar Younis",
        ans: "answer2"
    },
    {
        question: "What is Pakistan's national sport?",
        a: "Cricket",
        b: "Hockey",
        c: "Football",
        d: "Squash",
        ans: "answer2"
    },
    {
        question: "Which city is famous for its centuries-old traditional bazaars, such as Peshawar's Qissa Khwani Bazaar?",
        a: "Lahore",
        b: "Karachi",
        c: "Peshawar",
        d: "Quetta",
        ans: "answer3"
    },
    {
        question: "Who is Pakistan's first female Prime Minister?",
        a: "Fatima Jinnah",
        b: "Benazir Bhutto",
        c: "Asma Jahangir",
        d: "Malala Yousafzai",
        ans: "answer2"
    },
    {
        question: "Which Pakistani physicist was awarded the Nobel Prize in Physics in 1979 for his work on the electroweak interaction?",
        a: "Abdus Salam",
        b: "Pervez Hoodbhoy",
        c: "Abdul Qadeer Khan",
        d: "Ishfaq Ahmad",
        ans: "answer1"
    },
    {
        question: "What is the name of Pakistan's national airline?",
        a: "PIA (Pakistan International Airlines)",
        b: "Air Pakistan",
        c: "Pakistan Airways",
        d: "Sky Pakistan",
        ans: "answer1"
    },
    {
        question: "Which historic city in Pakistan is known for its archaeological ruins and is considered one of the oldest cities in the world?",
        a: "Lahore",
        b: "Taxila",
        c: "Multan",
        d: "Sukkur",
        ans: "answer2"
    },
    {
        question: "What is the currency of Pakistan?",
        a: "Rupee",
        b: "Dollar",
        c: "Taka",
        d: "Riyal",
        ans: "answer1"
    },
    {
        question: "Which Pakistani artist is known for his distinctive truck art and has gained international recognition for his work?",
        a: "Shahzia Sikander",
        b: "Rashid Rana",
        c: "Imran Qureshi",
        d: "Haider Ali",
        ans: "answer3"
    },
    {
        question: "Which Pakistani writer was awarded the Booker Prize for her novel 'Burnt Shadows'?",
        a: "Kamila Shamsie",
        b: "Bapsi Sidhwa",
        c: "Tahmina Anam",
        d: "Mohsin Hamid",
        ans: "answer1"
    },
    {
        question: "What is the name of the highest paved international road in Pakistan that connects Pakistan and China?",
        a: "Karakoram Highway",
        b: "Silk Road",
        c: "Indus Highway",
        d: "Gwadar Expressway",
        ans: "answer1"
    },
    {
        question: "Which Pakistani physicist is known for his pioneering work in string theory and cosmology?",
        a: "Riazuddin",
        b: "Abdul Qadeer Khan",
        c: "Pervez Hoodbhoy",
        d: "Atta-ur-Rahman",
        ans: "answer3"
    }
];


var questions = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var next = document.getElementById("next");
var option = document.querySelectorAll(".option");
var displayScore = document.getElementById("displayScore");
var nameOfUser = document.getElementById("name");
nameOfUser.value = prompt("Enter your name");




var indexVariable = 0;
var score = 0;
next.disabled = true;



//For Displaying your name on screen:
function nameDisplay(){
    nameOfUser.innerHTML = `${nameOfUser.value}`
}


function displayQuestionNumber() {
    var questionNumber = indexVariable + 1;
    var totalQuestions = questionList.length;
    qno.textContent = `Question ${questionNumber} of ${totalQuestions}`;
}



function displayMcqs() {
    questions.innerHTML = `${questionList[indexVariable].question}`;
    option1.innerHTML = `${questionList[indexVariable].a}`;
    option2.innerHTML = `${questionList[indexVariable].b}`;
    option3.innerHTML = `${questionList[indexVariable].c}`;
    option4.innerHTML = `${questionList[indexVariable].d}`;
    displayQuestionNumber();
    nameDisplay();
}

displayMcqs();


//Deselect All options when new question comes:

function deselectAll(){
    option.forEach((currAnsElem)=> currAnsElem.checked = false);
};

// For PlayAgain button

function playAgain() {
    indexVariable = 0;
    score = 0;
    
    displayScore.innerHTML = "";
    nameOfUser.value = prompt("Enter your name");
 
    timer();
    displayMcqs();
    deselectAll();
}


option.forEach((currAnsElem) => {
    currAnsElem.addEventListener("change", function () {
        next.disabled = !isAnyOptionSelected();
    });
});

function isAnyOptionSelected() {
    for (var i = 0; i < option.length; i++) {
        if (option[i].checked) {
            return true;
        }
    }
    return false;
}

function getCheckAnswer() {
    var a ;
   for(var i=0 ;i<option.length;i++){
    var currAnsElem = option[i];
    if(currAnsElem.checked){
        a = currAnsElem.id;
    }
   }

    return a;
};
//For next Button
next.addEventListener("click", () => {
    
    var checkedAnswer = getCheckAnswer();
    
    if (checkedAnswer === questionList[indexVariable].ans) {
        score++;
    }
    
    indexVariable++; 
    
    if (indexVariable < questionList.length) {
        deselectAll();
        displayMcqs();
        next.disabled = true;
    } 
    else {
        var percentage = (score / questionList.length) * 100;
        var displayScore = document.getElementById("displayScore");
        // console.log(displayScore.innerHTML);
        displayScore.innerHTML += `<h5 class="displayBox mt-1">Score is : ${score} per ${percentage.toFixed(2)}%</h5> <button onclick="playAgain()" class="reset"><i class="fa-solid fa-rotate-right"></i></button>`
        
        next.disabled = true;
    }
})



// FOR TIMER

function timer (){
var [sec, min] = [30, 3]; 

var screen = document.getElementById("timer");
screen.innerHTML = `${min.toString()}:${sec.toString()}`
function timerStart() {
    sec--;
    if (sec < 0) {
        min--;
        sec = 59;
    }

    if (min === 0 && sec === 0) {
        clearInterval(timer); // Stop the timer when it reaches 0
        screen.innerHTML = "Time's up!";
        next.disabled=true;
        var percentage = (score / questionList.length) * 100;
        var displayScore = document.getElementById("displayScore");
        displayScore.innerHTML += `<h5 class="displayBox">Score is : ${score} with per : ${percentage.toFixed(2)}%</h5> <button onclick="playAgain()" class="reset" ><i class="fa-solid fa-rotate-right"></i></button>`;
    
        return;
    }

    screen.innerHTML = `${min.toString()}:${sec.toString()}`;

    if(indexVariable >= questionList.length){
        clearInterval(timer);
    };
}


var timer = setInterval(timerStart, 1000);
}
timer();