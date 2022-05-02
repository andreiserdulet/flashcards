import giggle from './assets/images/giggle.gif';
import sun from './assets/images/sun.gif';
import grinning from './assets/images/grinning.png'
import like from './assets/images/like.gif';
import penguin from './assets/images/penguin.gif';
import starEyes from './assets/images/star-eyes.png';
import grinningFaceSweat from './assets/images/grinnig-face-sweat.png'
import tearsOfJoy from './assets/images/tears-of-joy.png';
import coffe from './assets/images/coffee.gif';
import fingerscrossed from './assets/images/fingerscrossed.gif';

export interface IDummy_data {
    id: number,
    img?: string,
    question: string,
    answer: string[],
    correctAnswer: string;
}

export const dummy_data: IDummy_data[] = [
    {
        id: 1,
        img: giggle,
        question: 'What is Redux?',
        answer: [
            'a wrapper for React components',
            'a component library',
            'a library for mananging React props',
            'a predictable state container for JS Apps'
        ],
        correctAnswer: 'a predictable state container for JS Apps'
    },
    {
        id: 2,
        img: sun,
        question: 'Where does Redux stores the state',
        answer: [

            'in a data-warehouse',
            'in a database',
            'in component state',
            'in a store'


        ],
        correctAnswer: 'in a store'
    },
    {
        id: 3,
        img: grinning,
        question: 'Which are the Redux Principles',
        answer: [
            'Store, Action, Observer',
            'Reducer, Thunk, Store',
            'Store, Events, Handlers',
            'Action, Reducer, Store'
        ],
        correctAnswer: 'Action, Reducer, Store'
    },
    {
        id: 4,
        img: like,
        question: 'What are Actions in Redux?',
        answer: [
            'events that emit actions',
            'functions that return object',
            'string constants',
            'objects with a type property'
        ],
        correctAnswer: 'objects with a type property'
    },
    {
        id: 5,
        img: penguin,
        question: 'What are Action Creators',
        answer: [
            'functions that return a state',
            'objects that have a type property',
            'functions that set the state',
            'functions that return an object'
        ],
        correctAnswer: 'functions that return an object'
    },
    {
        id: 6,
        img: starEyes,
        question: 'Which methods are not in the redux store ?',
        answer: [
            'dispatch',
            'subscribe',
            'getState',
            'setState'

        ],
        correctAnswer: 'setState'
    },
    {
        id: 7,
        img: grinningFaceSweat,
        question: 'What is React Context used for ?',
        answer: [
            'importing components',
            'making API calls',
            'managing props',
            'managing state'
        ],
        correctAnswer: 'managing state'
    },
    {
        id: 8,
        img: tearsOfJoy,
        question: 'What is the role of the Provider in Context API',
        answer: [
            'provides the state to parent components',
            'provides the state to sibling components',
            'does not provide the state',
            'provides the state to child components'
        ],
        correctAnswer: 'provides the state to child components'
    },
    {
        id: 9,
        img: coffe,
        question: 'How can we consume the context',
        answer: [
            'using useState',
            'using the consumer hook',
            'using applyContext',
            'using useContex'
        ],
        correctAnswer: 'using useContex'
    },
    {
        id: 10,
        img: fingerscrossed,
        question: 'Can Context API be used in non React projects',
        answer: [
            'yes',
            'yes - install it with npm',
            'yes - install it with yarn',
            'no'
        ],
        correctAnswer: 'no'
    }
]