//model
let list = [];

function Item(name,price,img){
    this.name=name;
    this.price = price;
    this.img = img;
}

function add(name,price,img){
    let item = new Item(name,price,img);

    list.push(item);
    view(list);
}

function remove(removeIndex){
    list.splice(removeIndex,1);
    view();
}

function fix(fixIndex){
    console.log(fixIndex);
}

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

}

function readImage(input) {
    // 인풋 태그에 파일이 있는 경우
    if(input.files && input.files[0]) {
        // 이미지 파일인지 검사 (생략)
        // FileReader 인스턴스 생성
        const reader = new FileReader()
        // 이미지가 로드가 된 경우
        reader.onload = e => {
            
            previewImage.src = e.target.result
        }
        // reader가 이미지 읽도록 하기
        const readerImg = reader.readAsDataURL(input.files[0])
    }
}

function removeItem(e){
    if(e.target.tagName !== "INPUT") return;

    const removeIndex = e.target.id;
    remove(removeIndex);

}

function fixItem(e){
    if(e.target.tagName !== "BOTTON") return;
    console.log(e);
    const fixId = e.target.id;
    const fixIndex = fixId.split('-');
    console.log(fixIndex);
    fix(fixIndex);
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
ul.addEventListener('click',removeItem);
ul.addEventListener('click',fixItem);
// views


function view(name,price){

    ul.innerHTML = '';

    list.forEach((el,ind)=>
    {
      const li =
      `<li id=list-${ind}" class = "shop-list">
            <p>${el.name}</p>
            <p>${el.price}</p>
            <img src="${el.img}" alt=${el.name} /> 
            <input type = "checkbox"id="${ind}" class="btn" />
            <button id="button-${ind}" class="fix">수정</botton>
        </li>`

        ul.insertAdjacentHTML('afterbegin', li);
    })
       
}

