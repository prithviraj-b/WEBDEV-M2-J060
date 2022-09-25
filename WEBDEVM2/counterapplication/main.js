let increase = document.getElementById('increment');
let decrease = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

increase.addEventListener('click',() =>{

    integer +=1;
    int.innerHTML = integer;

})

decrease.addEventListener('click',() =>{
    if  (integer >=1)                       //Loop to check if the number is bellow 0 it will not subtract
    {
    integer -= 1
    int.innerHTML = integer;
    }
    
})