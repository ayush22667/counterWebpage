const countValut = document.querySelector('#counter');
const pl = document.querySelector('#plus');



const decrement = () => {
     //get the value from ui
     let value = parseInt(countValut.innerText);
     //update the value
     value = value - 1;
     //set the value onto ui
     countValut.innerText = value;
};

pl.addEventListener('click',() => {
    //get the value from ui
    let value = parseInt(countValut.innerText);
    //update the value
    value = value + 1;
    //set the value onto ui
    countValut.innerText = value;

});