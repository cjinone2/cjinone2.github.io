const data = {
    1 : "H",
    2 : "He",
    3 : "Li",
    4 : "Be",
    5 : "B",
    6 : "C",
    7 : "N",
    8 : "O",
    9 : "Al",
}

const data2 = ["H",
                "He",
                "Li",
                "Be",
                "B",
                "C",
                "N",
                "O",
                "Al",
                "Cu",
                "P",
                "S",
                "Cl",

]

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
        const randomIndex = Math.floor(Math.random() * data2.length);
        const display = document.querySelector('#display');
        display.textContent = randomIndex;
    } else {
        const values = Object.values(data);
        const randomIndex = Math.floor(Math.random() * values.length);
        const symbol = values[randomIndex];

        const display = document.querySelector('#display');
        display.textContent = symbol;
    }
}

function check(){
    const answerBox = document.querySelector('#answer-box');
    const answer = answerBox.value;

    console.log(data[3]);

}
