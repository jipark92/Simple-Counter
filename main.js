const decreaseBtn = document.querySelector('.decrease-btn');
const resetBtn = document.querySelector('.reset-btn');
const increaseBtn = document.querySelector('.increase-btn');

const display = document.querySelector('.screen');

let num = display.textContent;






decreaseBtn.addEventListener('click', ()=> {
    num = display.textContent--;
    console.log(num);
})



//another way
/*resetBtn.addEventListener('click', ()=>{
    num = display.textContent= "0";
})*/

//longer way i thought of for fun
function reset () {
    resetBtn.addEventListener('click', ()=>{
        if (num > "0" ) {
            num = display.textContent = "0";
        }
        else if (num < "0" ) {
           num = display.textContent = "0";
        }
      
    })
}
reset();


increaseBtn.addEventListener('click', ()=>{
    num = display.textContent++;
    console.log(num)
})

