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

    // DATA-ADD
    const addItem = function(contents){
      // 이해가 안되는 부분 21.03.19
      // let Item = new Item(contents)를 사용하면 Item은 list = [{contents:'a'},contents:'b']라는 객체 형태로 저장이 된다
        let item = new Item(contents);
        list.push(item);
    }

    // DATA-REMOVE
    const removeItem = function(Item_Index){
        list.splice(Item_Index,1);
    }
    // DATA-CHECK
    const checkItem = function(Item_Index){

        let current_item = list[Item_Index];

        // view 조건문에 사용되었음
        current_item.finished = !current_item.finished;

    }

    return {
        list,
        Item,
        addItem,
        removeItem,
        checkItem,
    };
})();

//control
    const controls = (function controls(){

      // CONTROL-ADD
        const addItem = function(e){
            e.preventDefault();
            const add_value = Item.value;
            Data.addItem(add_value);
            UI.showList(Data.list)
            Item.value = '';

            UI.showList(Data.list);
        }
        
        // CONTROL-SEARCH
        const searchItem = function(){

          let search_value = search_input.value;

          let fliter_list = Data.list.filter((item) => {

            // indexOf는 문자열에서 특정 문자열을 찾고 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴합니다.
            return item.contents.indexOf(search_value) > -1;
          });

          UI.showList(fliter_list);
        }

        // CONTROL-REMOVE
        const removeItem = function(e){
          //2021.03.22 몰랐던 부분
          // tagName을 사용하면 해당허는 태그명은 대문자로 나온다
          if(e.target.tagName !== 'I') return;

          const Item_Id = e.target.parentNode.parentNode.id;
          const Item_Index = Item_Id.split('-');

          Data.removeItem(Item_Index);

          UI.showList(Data.list);
        }

        // CONTROL-CHECK
        const checkItem = function(e){
          if(e.target.tagName !== 'INPUT') return;

          let Item_Id = e.target.parentNode.parentNode.id;
          let Item_Index = Item_Id.split('-')[1];

          Data.checkItem(Item_Index);

          UI.showList(Data.list);

        }

        // 2021.03.22
        // var form = document.['list-form'];
        // document.[] - form 제어


        const form = document.querySelector('#list-form');
        const addItemInput = form.querySelector('.list-form__add-item');
        const Item = addItemInput.querySelector('#add-item__input');

        const section = document.querySelector('section');
        const search_input = document.querySelector('#search-item__input');

        
        form.addEventListener('submit',addItem);

        // addEventListener('input',fun)은 input의 값이 변경할때마다 값을 기록한다.
        search_input.addEventListener('input',searchItem);

        section.addEventListener('click',removeItem);

        section.addEventListener('change',checkItem);



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
              '<div class="item__content">'+item.contents+'</div>' +
              '<div class="item__action">' +
                '<i class="fa fa-trash" aria-hidden="true"></i>' +
                '<input type="checkbox">' +
              '</div>' +
            '</li>';

        // 2021.03.22
        // Element.insertAdjacentHTML()
        to_do_list.insertAdjacentHTML('afterbegin', to_do_item_HTML);
      }else {
        var finished_item_HTML = 
            '<li class="to-do-list__item" id="item-'+ i +'">' +
              '<div class="item__content">'+item.contents+'</div>' +
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