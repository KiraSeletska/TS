"use strict";
//***************************model********************************************************************
const state = [];
const createStateTS = () => {
    for (let i = 0; i < 100; i++) {
        const squares = {
            status: false,
        };
        state.push(squares);
    }
    return state;
};
createStateTS();
//**************************view***********************************************************************
const creatElements = (localState, actions) => {
    const field = document.createElement("div");
    field.classList.add("field");
    const fieldSQ = document.createElement("div");
    fieldSQ.classList.add("fieldSQ");
    const stateBtn = document.createElement("button");
    stateBtn.classList.add("stateBtn");
    stateBtn.innerText = 'state';
    stateBtn.addEventListener("click", () => {
        console.log(localState);
    });
    const squares = localState.map((el) => {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener('click', () => actions.changeStatus(el, square));
        return square;
    });
    fieldSQ.append(...squares);
    field.append(stateBtn, fieldSQ);
    const arr = [];
    arr.push(field);
    return arr;
};
const render = (localState, root, actions) => {
    const elements = creatElements(localState, actions);
    root.replaceChildren();
    root.append(...elements);
};
//******************************************controller*******************************************************
const createActions = (localState, root) => {
    const actions = {
        start: () => render(localState, root, actions),
        changeStatus: (el, square) => {
            el.status = !el.status;
            square.classList.toggle("squareClick1");
        }
    };
    return actions;
};
const root = document.querySelector("#root");
const actions = createActions(state, root);
actions.start();
