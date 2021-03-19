// model

let model = (function(){
    let list = [];

    const Item = function(contents){
        this.contents =contents;
    }
    const addItem = function(contents){
        const Item = new Item(contents);
        Item.push(contents);
    }

    return {
        list,
        Item,
        addItem,
    };
})();

//control
    function controls(){
        const addItem = function(e){
            e.preventDefault();
            const add_value = addItemInput.value;
            Data.addItem(add_value);
            UI.showList(add_value)

        }
        let form = document.querySelector('.list-form');
        let addItemInput = form.querySelector('.add-item__input');
        
        form.addEventListener('submit',addItem);
    }();

    
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