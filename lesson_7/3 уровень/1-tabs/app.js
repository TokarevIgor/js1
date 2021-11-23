'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let textElm = document.querySelector('.text');
let navLinkElms = document.querySelectorAll('.nav-link');
navLinkElms.forEach(elm => {
    elm.addEventListener('click', clickHandler)
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.

    changeActiveClass(event);
    changeText(event);

}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    navLinkElms.forEach(elm => {
        if (elm != event.target) {
            elm.classList.remove('active');
        }
        else {
            elm.classList.add('active');
        }
    })

}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    let targetTextContent = event.target.textContent;
    switch (targetTextContent) {
        case 'Link 1':
            textElm.textContent = texts.text1;
            break;
        case 'Link 2':
            textElm.textContent = texts.text2;
            break;
        case 'Link 3':
            textElm.textContent = texts.text3;
            break;
    }

}