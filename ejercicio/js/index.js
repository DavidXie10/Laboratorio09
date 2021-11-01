const ITEMS_COUNT_INPUT = 'items-count-input'
const EXERCISES_ITEMS_PLACE = 'exercise-items'
const EXERCISES_BUTTONS_PLACE = 'exercises-buttons'
const BASE_LIST_ITEM_ID = 'question_'
const BASE_SOLUTION_ITEM_ID = 'solution_';
const BASE_INPUT_SOLUTION_ID = 'input_solution_';
const BASE_ANSWER_MESSAGE = 'checkMessage_';
const ERROR_INPUT_MESSAGE = 'invalid-input-error';
const QUIZ_TITLE = 'quiz-title';
const QUIZ_MESSAGE = 'quiz-message';
const FINAL_MESSAGE = 'final-message';
const TOTAL_QUESTIONS = 20;

function displayExercises(){
    const itemsCountInput = document.getElementById(ITEMS_COUNT_INPUT);
    const itemsCount = parseInt(itemsCountInput.value);

    if(itemsCount < 5 || itemsCount > TOTAL_QUESTIONS){
        show(ERROR_INPUT_MESSAGE);
    }else{
        hide(ERROR_INPUT_MESSAGE);
        setContent(QUIZ_TITLE, '<strong>Responda las siguientes preguntas</strong>')
        displayQuestions(itemsCount + 1);
    }
}

function checkAnswers(){
    if (confirm('¿Está seguro que quiere revisar sus respuestas?')) {
        setContent(QUIZ_TITLE, '<strong>Sus resultados</strong>');
        let correctAnswers = 0;
        let totalQuestions = 0;
    
        for(let question = 1; question <= TOTAL_QUESTIONS; ++question){
            let questionTag = document.getElementById(BASE_LIST_ITEM_ID + question.toString());
            if (window.getComputedStyle(questionTag).display != "none") {
                let userInput = parseInt(document.getElementById(BASE_INPUT_SOLUTION_ID + question).value);
                let answer = document.getElementById(BASE_SOLUTION_ITEM_ID + question).innerHTML;
                if(userInput == answer){
                    ++correctAnswers;
                    hide(BASE_INPUT_SOLUTION_ID + question);
                }else{
                    let inputSolution = document.getElementById(BASE_INPUT_SOLUTION_ID + question);
                    inputSolution.style.border = "solid red";
                    inputSolution.style.color = "red";
                    showInlineBlock(BASE_ANSWER_MESSAGE + question);
                }
    
                showInlineBlock(BASE_SOLUTION_ITEM_ID + question);
                ++totalQuestions;
            }
        }
    
        setContent(QUIZ_MESSAGE, 'Respondió <strong>' + correctAnswers + '</strong> operaciones de <strong>' + totalQuestions + '</strong> correctamente.');
        hide(EXERCISES_BUTTONS_PLACE);
        show(FINAL_MESSAGE);
    }
}

function showAnswers(){
    if (confirm('¿Está seguro que quiere ver las respuestas?')) {
        setContent(QUIZ_TITLE, '<strong>Respuestas</strong>');

        for(let question = 1; question <= TOTAL_QUESTIONS; ++question){
            let questionTag = document.getElementById(BASE_LIST_ITEM_ID + question);
            if (window.getComputedStyle(questionTag).display != "none") {
                hide(BASE_INPUT_SOLUTION_ID + question);
                showInlineBlock(BASE_SOLUTION_ITEM_ID + question);
            }
        }
    
        hide(EXERCISES_BUTTONS_PLACE);
        show(FINAL_MESSAGE);
    } 
}

function setContent(id, content){
    document.getElementById(id).innerHTML = content;
}

function displayQuestions(itemsCount){
    for(let question = 1; question < itemsCount; ++question){
        show(BASE_LIST_ITEM_ID + question);
    }

    for(let question = itemsCount; question <= 20; ++question){
        hide(BASE_LIST_ITEM_ID + question);
    }

    document.getElementById(EXERCISES_ITEMS_PLACE).style.display = "block";
}

function showInlineBlock(id){
    document.getElementById(id).style.display = "inline-block";
}

function show(id){
    document.getElementById(id).style.display = "block";
}

function hide(id){
    document.getElementById(id).style.display = "none";
}
