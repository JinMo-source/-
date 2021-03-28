//model
let list = [];
function Item(name,price){
    this.name=name;
    this.price = price;
}
function add(name,price,img){
    let item = new Item(name,price);
    console.log(item);
    list.push(item);
}
// controls
function addItem(e){
    e.preventDefault();
    const add_Item = inputName.value;
    const add_Price = inputPrice.value;
    add(add_Item,add_Price);
    
}



const form = document.forms['shop-form'];
const inputName = document.querySelector('#input-name');
const inputPrice = document.querySelector('#input-price');
form.addEventListener('submit',addItem);
// views

