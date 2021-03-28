const tab = document.querySelector('.tab');
const index = tab.querySelector('.tabIndex');

function handleIndex(ind){
    let tabIndex = tab.target.classname;
    console.log(tabIndex);
}

tab.addEventListener('click',handleIndex);