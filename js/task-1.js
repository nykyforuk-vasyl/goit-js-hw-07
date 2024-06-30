
// Створюю посилання на селектор та список елеметів, вивожу в консоль кількість категорій. 
const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

// 1. За допомогою циклу forEach перебираю елементи масиву змінної categories.
// 2. За допомогою методу querySelector знахожу елемент заголовку h2 та вивожу його значення за допомогою методу textContent.
// 3. За допомогою методу querySelectorAll створюю колекцію елементів li та виводжу їх кількість за допомогю методу .length.
categories.forEach((category) => {
    const title = category.querySelector("h2").textContent;
    const itemsTitle = category.querySelectorAll("ul li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsTitle}`);
});