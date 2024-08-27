import './Quize.scss';
import React, { useState } from 'react';
const plural = require('plural-ru');


const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
    {
        title: 'Кто разработал React JS?',
        variants: [
            'Facebook',
            'Google',
            'Twitter',
        ],
        correct: 0,
    },
    {
        title: 'Где правильно?',
        variants: [
            '<Test >',
            '<Test />',
            '</ Test>',
        ],
        correct: 1,
    },
];

function Result({ result, reset }) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {result} {plural(result, 'ответ', 'ответа', 'ответов')}  из {questions.length}</h2>
            <button onClick={reset}>Попробовать снова</button>
        </div>
    );
}

function Game({ question, onClickVariant, step }) {
    const percent = Math.round(step / questions.length * 100);
    return (
        <>
            <div className="progress">
                <div style={{ width: `${percent}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((item, i) => (<li key={i} onClick={() => { onClickVariant(i) }}>{item}</li>))}
            </ul>
        </>
    );
}



function Quize() {
    const [step, setStep] = useState(0);
    const question = questions[step];
    const [result, setResult] = useState(0);

    function onClickVariant(index) {
        if (questions[step].correct == index) {
            setResult(result + 1);
        }
        setStep(step + 1);
    }

    function reset() {
        setStep(0);
        setResult(0)
    }
    return (
        <div className="Quize">
            {step !== questions.length ? <Game question={question} onClickVariant={onClickVariant} step={step} /> : <Result result={result} reset={reset} />}
        </div>
    )
}


export default Quize;