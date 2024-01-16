
const list = document.getElementById(`categories`);
const categories = list.querySelectorAll(`li.item`);
console.log(`Number of categories: ${categories.length}`);

categories.forEach(categories => {
    const categoryName = categories.querySelector(`h2`).textContent;

    const itemsNumber = categories.querySelectorAll(`ul > li`);

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemsNumber.length}`);
})