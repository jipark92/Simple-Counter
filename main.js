const decreaseBtn = document.querySelector('.decrease-btn');
const resetBtn = document.querySelector('.reset-btn');
const increaseBtn = document.querySelector('.increase-btn');

const display = document.querySelector('.screen');

let num = display.textContent;

decreaseBtn.addEventListener('click', ()=> {
    num += display.textContent--;
})


resetBtn.addEventListener('click', ()=>{
    num = display.textContent= "0";
})




increaseBtn.addEventListener('click', ()=>{
    num += display.textContent++;
})


console.log(num);
