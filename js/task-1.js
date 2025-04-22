const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.children;
console.log(`Number of categories: ${categoryItems.length}`);

Array.from(categoryItems).forEach(item => {
  const title = item.firstElementChild.textContent; 
  const elementsCount = item.lastElementChild.children.length; 
  
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});