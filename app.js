// localStorage.clear()
// sessionStorage.clear()

if(!localStorage.getItem('count')){
    localStorage.setItem('count',0);
}
if(!sessionStorage.getItem('count')){
    sessionStorage.setItem('count',0);
}

document.querySelector("#sessionCount").innerHTML = sessionStorage.getItem('count');
document.querySelector("#localCount").innerHTML = localStorage.getItem('count');

const localIncBtn = document.querySelector('#localI');
const localDecBtn = document.querySelector('#localD');
const sessionIncBtn = document.querySelector('#sessionI');
const sessionDecBtn = document.querySelector('#sessionD');

localIncBtn.addEventListener('click',incLocalCount);
localDecBtn.addEventListener('click',decLocalCount);
sessionIncBtn.addEventListener('click',incSessionCount);
sessionDecBtn.addEventListener('click',decSessionCount);

function incLocalCount(){
    let currLocalCount = parseInt(localStorage.getItem('count'));
    localStorage.setItem('count',currLocalCount+1);
    document.querySelector('#localCount').innerHTML = currLocalCount+1;
}

function decLocalCount(){
    let currLocalCount = parseInt(localStorage.getItem('count'));
    localStorage.setItem('count',currLocalCount-1);
    document.querySelector('#localCount').innerHTML = currLocalCount-1;
}

function incSessionCount(){
    let currSessionCount = parseInt(sessionStorage.getItem('count'));
    sessionStorage.setItem('count',currSessionCount+1);
    document.querySelector('#sessionCount').innerHTML = currSessionCount+1;
}

function decSessionCount(){
    let currSessionCount = parseInt(sessionStorage.getItem('count'));
    sessionStorage.setItem('count',currSessionCount-1);
    document.querySelector('#sessionCount').innerHTML = currSessionCount-1;
}
