// model

let Data = (function(){
    let list = [];

    const Item = function(contents){

      // 이해가 안되는 부분 21.03.19
      // 개념 : 바인딩 개념을 찾아보면 나온다. 21.03.21
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/class
      
        this.contents =contents;
    }

    const addItem = function(contents){

      // 이해가 안되는 부분 21.03.19
      // let Item = new Item(contents)를 사용하면 Item은 list = [{contents:'a'},contents:'b']라는 객체 형태로 저장이 된다
        let item = new Item(contents);
        list.push(item);``
    }

    const removeItem = function(contents){
        
    }

    return {
        list,
        Item,
        addItem,
    };
})();

//control
    const controls = (function controls(){
        const addItem = function(e){
            e.preventDefault();
            const add_value = Item.value;
            Data.addItem(add_value);
            UI.showList(Data.list)
            Item.value = '';
        }
        let form = document.querySelector('#list-form');
        let addItemInput = form.querySelector('.list-form__add-item');
        let Item = addItemInput.querySelector('#add-item__input');
        
        form.addEventListener('submit',addItem);
    })();

    
//view
var UI = (function(){

    var to_do_list = document.querySelector('.to-do-list');
    var finished_list = document.querySelector('.finished-list');

  var showList = function(list) {

    finished_list.innerHTML = '';
    to_do_list.innerHTML = '';

    list.forEach(function(item, i) {

      if(!item.finished) {
        var to_do_item_HTML = 
            '<li class="to-do-list__item" id="item-'+ i +'">' +
              '<div class="item__content">'+item.content+'</div>' +
              '<div class="item__action">' +
                '<i class="fa fa-trash" aria-hidden="true"></i>' +
                '<input type="checkbox">' +
              '</div>' +
            '</li>';
        to_do_list.insertAdjacentHTML('afterbegin', to_do_item_HTML);
      }else {
        var finished_item_HTML = 
            '<li class="to-do-list__item" id="item-'+ i +'">' +
              '<div class="item__content">'+item.content+'</div>' +
              '<div class="item__action">' +
                '<i class="fa fa-trash" aria-hidden="true"></i>' +
                '<input type="checkbox" checked>' +
              '</div>' +
            '</li>';
        finished_list.insertAdjacentHTML('afterbegin', finished_item_HTML);
      }
    });
  }
  
  return {
    showList: showList
  };
})();