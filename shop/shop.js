//model
let list = [];
function Item(name,price,img){
    this.name=name;
    this.price = price;
    this.img = img;
}
function add(name,price,img){
    let item = new Item(name,price,img);
    console.log(item);
    list.push(item);
    view(list);
}
// controls
function addItem(e){
    e.preventDefault();
    const add_Item = inputName.value;
    const add_Price = inputPrice.value;
    add(add_Item,add_Price);
}

function readImage(input) {
    // 인풋 태그에 파일이 있는 경우
    if(input.files && input.files[0]) {
        // 이미지 파일인지 검사 (생략)
        // FileReader 인스턴스 생성
        const reader = new FileReader()
        // 이미지가 로드가 된 경우
        reader.onload = e => {
            const previewImage = document.getElementById("preview-image")
            previewImage.src = e.target.result
        }
        // reader가 이미지 읽도록 하기
        const readerImg = reader.readAsDataURL(input.files[0])
    }
}
// input file에 change 이벤트 부여
const inputImage = document.getElementById("input-img")
inputImage.addEventListener("change", e => {
    readImage(e.target)
})


const form = document.forms['shop-form'];
const inputName = document.querySelector('#input-name');
const inputPrice = document.querySelector('#input-price');
const inputImg = document.querySelector("#input-img");
form.addEventListener('submit',addItem);
// views


function view(name,price){

    const ul = document.querySelector('.shop-ul');        

    list.forEach((el,ind)=>{
        console.log(el);
      const li = `<li id=${ind} class = shop-list>
            <p>${el.name}</p>
            <p>${el.price}</p>
            
        </li>`

        ul.insertAdjacentHTML('afterbegin', li);
    })
    
    
}
