const btn = document.querySelectorAll('.btn');

function handler(){
    btn.forEach(btn=>{btn.addEventListener('click',btnIndex)})
}


function btnIndex(){
    let input = document.querySelector('.input');
    let inputVal = input.value;
    let result = document.querySelector('.result');

    if(this.dataset.type === 'number'){
        if(inputVal==='0'){
            input.value=this.innerText;
            inputVal += this.innerText;
        }else{
            input.value+=this.innerText;
            inputVal += this.innerText;
        }
        console.log(inputVal)
    }else if(this.dataset.type !=="number"){
        input.value+=this.innerText;
    }
}
handler()