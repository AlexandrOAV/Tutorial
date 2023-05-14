                    // ЗАДАЧА. КРАМНИЦЯ ЗІЛЛЯ «У СТАРОЇ ЖАБИ»
// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення
// інвентарю - додавання, видалення, пошуку та оновлення зілля.
// Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.
// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив []

// const atTheOldToad = {
//   // Change code below this line
// potion: [],


//   // Change code above this line
// };
// console.log(atTheOldToad.potion);


                                // ЗАДАЧА. ОТРИМУЄМО ВСЕ ЗІЛЛЯ
// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//     getPotions() {
//         return this.potions;
// }
//   // Change code above this line
// };

                            // ЗАДАЧА: ДОДАЄМО НОВЕ ЗІЛЛЯ
// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля
// potionName в кінець масиву зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//       this.potions.push(potionName);
      
//       return this.potions;
     


//     // Change code above this line
//   },
// };
// atTheOldToad.addPotion("Invisibility"); //["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// atTheOldToad.addPotion("Power potion"); //["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]
 
                            // ЗАДАЧА: ВИДАЛЯЄМО ЗІЛЛЯ
// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з
//  масиву зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//       if (this.potions.indexOf(potionName) >= 0) {
//           this.potions.splice(this.potions.indexOf(potionName), 1);
// }


//     // Change code above this line
//   },
// };
                        // ЗАДАЧА: ОНОВЛЮЄМО ЗІЛЛЯ
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля
// з oldName на newName в масиві зілля у властивості potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//       const indexOldName = this.potions.indexOf(oldName);
   
//       this.potions.splice(indexOldName, 1, newName);
//     // Change code above this line
//   },
// };
// console.log('old', atTheOldToad.potions);
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");

// console.log('new', atTheOldToad.potions);

                                // ЗАДАЧА: РОЗШИРЮЄМО ІНВЕНТАР
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною,
//  а в майбутньому, можливо, й іншими характеристиками.Тому зараз у властивості potions буде
//  зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином,
// щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
    
    
//   ],
//   // Change code below this line
//     getPotions() {
//     return this.potions;
//   },
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//          }
//          this.potions.push(newPotion);
//     return this.potions;
//   },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i++) {
      
          
//             if (this.potions[i].name === potionName) {
//                 this.potions.splice(i, 1);
//             }
//         }
//       return this.potions;
//     },
//   updatePotionName(oldName, newName) {
//       for (const potion of this.potions) {
    
//           if (potion.name === oldName) {
//               potion.name = newName;
//         }

//       } return this.potions;
//     },
  
//   // Change code above this line
// };

// atTheOldToad.getPotions();//[ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// // atTheOldToad.addPotion( { name: "Speed potion", price: 460 }); //
// // console.log(atTheOldToad.potions);
// // atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// // console.log(atTheOldToad.potions);
// // atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// // console.log(atTheOldToad.potions);
// // atTheOldToad.addPotion({ name: "Stone skin tuea", price: 240 });
// // console.log(atTheOldToad.potions);
// // atTheOldToad.removePotion("Dragon breath");
// // atTheOldToad.removePotion("Speed potion");
// // atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// // atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// console.log(atTheOldToad.potions);

                            //ЗАДАЧА ВІД ЧАТА GPT
// Вам потрібно створити програму для керування книжковою полицею в бібліотеці. 
// Створіть об'єкт "книжкова полиця", який містить масив об'єктів "книжка".
// Кожен об'єкт "книжка" містить в собі наступні поля: назва, автор, рік видання, видавництво.

// Вам потрібно реалізувати наступні функції:

// Додати нову книжку до книжкової полиці
// Видалити книжку з книжкової полиці за назвою
// Знайти всі книжки на книжковій полиці від певного автора
// Відсортувати книжки на книжковій полиці за роком видання
// const bookShelf = {
//     books: [
//         {
//             title: "Graf Monte Kristo",
//             autor: "Olexandr Duma",
//             yearPuplik: 2015,
//             publishingHouse: "Kyiv Izdat",
//             number: 1,
//         },
//         {
//             title: "Three mushketers",
//             autor: "Olexandr Duma",
//             yearPuplik: 2014,
//             publishingHouse: "Kyiv Izdat",
//             number: 2,
//         }
//     ],
//     addBook(newBook) {
//         const { title, autor, yearPuplik, publishingHouse, number, } = newBook;
       
//         for (const book of this.books) {
//             if ((book.title === title) &&
//                 (book.yearPuplik === yearPuplik) &&
//                 (book.publishingHouse === publishingHouse)) {
//                 book.number = number + 1;
//                 return this.books;
//             }
           
//         }
//         this.books.push(newBook);
//         return this.books;
//     },
//     deleteBook(offBook) {
//         const { title, autor, yearPuplik, publishingHouse, number, } = offBook;
//         for (let i = 0; i < this.books.length; i++) {
//             if ((this.books[i].title === title) &&
//                 (this.books[i].yearPuplik === yearPuplik) &&
//                 (this.books[i].publishingHouse === publishingHouse)) {
//                 this.books[i].number = this.books[i].number - number;
//                     if (this.books[i].number === 0) {
//                    console.log(i, this.books[i]);
//                     this.books.splice(i, 1);
                                    
//                 }
//                 return this.books;
//             }
           
//         }
//     }
// }
// let newBook = {
//    title: "Three mushketers",
//             autor: "Olexandr Duma",
//             yearPuplik: 2014,
//     publishingHouse: "Kyiv Izdat",
//             number:1,
// };
// bookShelf.addBook(newBook);
// console.log(bookShelf.books);
//    newBook = {
//    title: "Three mushketers 3",
//             autor: "Olexandr Duma",
//             yearPuplik: 2014,
//     publishingHouse: "Kyiv Izdat",
//             number:1,
// };
// bookShelf.addBook(newBook);
// console.log(bookShelf.books);
//    newBook = {
//    title: "Three mushketers 4",
//             autor: "Olexandr Duma",
//             yearPuplik: 2014,
//     publishingHouse: "Kyiv Izdat",
//             number:1,
// };
// bookShelf.addBook(newBook);
// console.log(bookShelf.books);

// const offBook = {
//     title: "Three mushketers",
//     autor: "Olexandr Duma",
//     yearPuplik: 2014,
//     publishingHouse: "Kyiv Izdat",
//     number: 1,
// };
// bookShelf.deleteBook(offBook);
// console.log(bookShelf.books);
