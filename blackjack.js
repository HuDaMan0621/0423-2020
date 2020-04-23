document.getElementById("deal-button").addEventListener("click", function(event){
    alert('Element clicked through function!');
});




function event(dealerPoints){
    

}



function categoriesToListItems(arrayOfStrings) {
    return arrayOfStrings.map(nameToListItem);
  }
  function appendToMenu(listItem) {
    const ul = document.querySelector('.js-menu');
    ul.appendChild(listItem);
  }
  const categories = getCategories(menu);
  const categoryListItems = categoriesToListItems(categories);
  categoryListItems.forEach(appendToMenu);