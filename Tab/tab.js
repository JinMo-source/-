const tab = document.querySelector('.tab');
const index = tab.querySelector('.tabIndex');
const img = document.querySelector('.image');
console.dir(img);
function handleIndex(e){
    let tabIndex = e.target.dataset.number;
    let children = img.children[tabIndex-1];
    
    
    children.style.display="block";

}

tab.addEventListener('click',handleIndex);