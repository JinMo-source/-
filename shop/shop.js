//model
let list = [];
let fixItem = [];


function Item(name,price,img){
    this.name=name;
    this.price = price;
    this.img = img;
}

function add(name,price,img){
    let item = new Item(name,price,img);

    list.push(item);
}

function remove(removeIndex){
    list.splice(removeIndex,1);
}

function fix(fixIndex){
    const fixData = list[fixIndex];

    fixItem.push(fixData);
}
console.log(fix.fixItem);
// controls
function addItem(e){
    e.preventDefault();

    const add_Item = inputName.value;
    const add_Price = inputPrice.value;
    const add_Img = previewImage.src;

    if(previewImage.src === "http://placehold.it/100x100"){
        return alert("이미지를 선택하세요")
    };

    add(add_Item,add_Price,add_Img);

    inputName.value = "";
    inputPrice.value = "";
    inputImg.value = "";
    previewImage.src = 'http://placehold.it/100x100';

    view(list);
}

function readImage(input) {
    // 인풋 태그에 파일이 있는 경우
    if(input.files && input.files[0]) {
        // 이미지 파일인지 검사 (생략)
        // FileReader 인스턴스 생성
        const reader = new FileReader()

        // 이미지가 로드가 된 경우
        reader.onload = e => { 
            previewImage.src = e.target.result;
        }

        // reader가 이미지 읽도록 하기
        const readerImg = reader.readAsDataURL(input.files[0])
    }
}

function buttonItem(e){
    if(e.target.tagName !== "BUTTON") return;

    const buttonIndex = e.target.id;
    if(e.target.className === "fix"){
        const fixIndex = buttonIndex.split('-')[1];
        fix(fixIndex);

        fixView(fixItem);

    } else {
        remove(buttonIndex);
    }

    view();
}


// input file에 change 이벤트 부여
const inputImage = document.getElementById("input-img");

inputImage.addEventListener("change", e => {
    readImage(e.target);
})


const form = document.forms['shop-form'];
const inputName = document.querySelector('#input-name');
const inputPrice = document.querySelector('#input-price');
const inputImg = document.querySelector("#input-img");
const previewImage = document.getElementById("preview-image")

form.addEventListener('submit',addItem);

const ul = document.querySelector('.shop-ul');        
ul.addEventListener('click',buttonItem);

// views
function view(name,price){

    ul.innerHTML = '';

    list.forEach((el,ind)=>{
      const li =
      `<li id=list-${ind}" class = "shop-list">
            <p>${el.name}</p>
            <p>${el.price}</p>
            <img src="${el.img}" alt=${el.name} /> 
            <button id="${ind}" class="btn">삭제</button>
            <button id="button-${ind}" class="fix">수정</button>
        </li>`

        ul.insertAdjacentHTML('afterbegin', li);
    })      
}

function fixView(name){

    const fixDiv = document.querySelector('.list-Fix');

    fixItem.forEach((el,ind)=>{
        const fixLi = 
        `<form id="list-fix__form" name = "fix-form">
            <input type="text" name="name" id = "fix-name" value = "${el.name}" required autofocus/>
            <input type="text" name="price" id = "fix-input-price" value = "${el.price}"/>
            <img src= "${el.img}" id = "preview-image" />
            <input type="file" name="image" id = "input-img" accept="image/*" />
            <input type="submit" value="submit">
        </form>`

    fixDiv.insertAdjacentHTML('afterbegin', fixLi);
    })
}