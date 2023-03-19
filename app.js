let data = {};
fetch("https://raw.githubusercontent.com/cjinone2/cjinone2.github.io/main/data.json")
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData
    })

let mode = "Symbol";


function activateNumberMode() {
    // 원소번호 모드 버튼에 active 클래스 추가
    const numberBtn = document.querySelector('.number-btn');
    numberBtn.classList.add('active');
  
    // 원소기호 모드 버튼에서 active 클래스 제거
    const symbolBtn = document.querySelector('.symbol-btn');
    symbolBtn.classList.remove('active');

    mode = "Number";
    shake();
}

function activateSymbolMode() {
    // 원소번호 모드 버튼에 active 클래스 추가
    const numberBtn = document.querySelector('.symbol-btn');
    numberBtn.classList.add('active');
  
    // 원소기호 모드 버튼에서 active 클래스 제거
    const symbolBtn = document.querySelector('.number-btn');
    symbolBtn.classList.remove('active');

    mode = "Symbol";
    shake();
}

function shake(){
    if (mode == "Number"){
        const keys = Object.keys(data);
        const randomIndex = Math.floor(Math.random() * 40);
        const number = keys[randomIndex];
        const display = document.querySelector('#display');
        display.textContent = number;
    } else {
        const values = Object.values(data);
        const randomIndex = Math.floor(Math.random() * 40);
        const symbol = values[randomIndex];
        const display = document.querySelector('#display');
        display.textContent = symbol;
    }
}

function check(){
    const answerBox = document.querySelector('#answer-box');
    const answer = answerBox.value;

    const correctBox = document.querySelector('#correct-count');
    const wrongBox = document.querySelector('#wrong-count');
    
    if (mode == "Number"){
        const display = document.querySelector("#display");
        const number = display.textContent
        if (answer == data[number]){
            answerBox.value = '';
            correctBox.textContent++;
            shake();
        } else{
            answerBox.value = '';
            wrongBox.textContent++;
            shake();
        }
    } else {
        const display = document.querySelector("#display");
        const symbol = display.textContent
        if (symbol == data[answer]){
            answerBox.value = '';
            correctBox.textContent++;
            shake();
        } else {
            answerBox.value = '';
            wrongBox.textContent++;
            shake();
        }
    }
    
}

function addValue(value) {
    document.getElementById("answer-box").value += value;
}

function remove(){
    document.getElementById("answer-box").value = "";
}