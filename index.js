
//will this work if I make it store instead of STORE?
//We'll see in a bit
const store = [
  {id: cuid(), name: "apples", checked: false},
  {id: cuid(), name: "oranges", checked: false},
  {id: cuid(), name: "milk", checked: true},
  {id: cuid(), name: "bread", checked: false}
];


function itemElement(item) {
  return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}


function shoppingItemString(shoppingList) {
   let items = shoppingList.map((item) => generateItemElement(item));
  //should spit out the item string
  return /*?;*/;
 console.log(' "shopping list item" ran');
}


function renderShoppingList() {
  // render the shopping list 
  
    let shoppingItemString = shoppingItemString(store);

  //referencing HTML with DOM
       $('.js-shopping-list').html(shoppingListItemsString);
  console.log('`renderShoppingList` ran');
}


function addItemToShoppingList(itemName) {
    store.push({id: name: itemName, checked: false});
 console.log('`Adding item to shopping list` ran');
}

function newItemSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
        let newItemName = $('.js-shopping-list-entry').val();
          $('.js-shopping-list-entry').val('');
         addItemToShoppingList(newItemName);
       renderShoppingList();
    console.log('`handleNewItemSubmit` ran');
  });
}

function checkedItem(itemId) {
  let item = store.find(item => item.id === itemId);
      item.checked = !item.checked;
    console.log(' `checked` ran');
}


function itemId(item) {
  return $(item).closest('li').data('item-id');
}

function itemCheckedOff() {
  $('.js-shopping-list').on('click', `.js-item-toggle`, event => {
     let id = getItemIdFromElement(event.currentTarget);
    toggleCheckedForListItem(id);
   renderShoppingList();
  });
 console.log('`itemCheckClicked` ran');
}



function deleteItem(itemId) {
  // should delete an item when the delete buttom is clicked
     let itemIndex = store.find(index(item => item.id === itemId));
  store.splice(itemIndex, 1);
console.log(" `Deleting item from shopping list` ran")
}


function deleteButton() {
  
  $('.js-shopping-list').on('click', '.js-item-delete', event => {

    let itemId = getItemId(event.currentTarget);
    
    deleteListItem(itemId);
  
    renderShoppingList();
  });
  console.log("`delete button clicked'")
}


function handleShoppingList() {
  //all the functions get called in here
  itemElement();
  renderShoppingList();
  addItemToShoppingLst();
  shoppingItemString();
  newItemSubmit();
  checkedItem();
  temId(); 
  itemCheckedOff();
  deleteItem();
  deleteButton();
}
${/*I know something goes in here*/}

