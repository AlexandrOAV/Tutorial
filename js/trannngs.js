// // Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
// // Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість
// //  items об'єкта, що створюється.
// // Оголоси наступні методи класу:

// // getItems() - повертає масив поточних товарів у властивості items об'єкта,
// // який викликає цей метод.
// //   addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості
// // items об'єкта, який викликає цей метод.
// // removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у
// // властивості items об'єкта, який викликає цей метод.
// class Storage  {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems(){
//       return this.items;
//      }
//  addItem(newItem) {
//       this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const indexItems = this.items.indexOf(itemToRemove);
//     if (indexItems>-1) {
//       this.items.splice(indexItems,1)
//     };
   
//   }
//     }
  


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]




// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок,
//   який записується у властивість value об'єкта, що створюється.
//  Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
//   padEnd(str) - отримує параметр str(рядок) і додає його в кінець значення властивості
// value об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str(рядок) і додає його на початок значення властивості
// value об'єкта, який викликає цей метод.

// padBoth(str) - отримує параметр str(рядок) і додає його на початок і в кінець значення
// властивості value об'єкта, який викликає цей метод.
// Change code above this line
// class StringBuilder{
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// Додай класу Admin наступні властивості і методи.
// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів.
// Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список.
// Метод повинен додавати значення параметра email в масив, що зберігається у властивості
// blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.
// Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у
// властивості blacklistedEmails, і повертати true або false.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
  

//   constructor({ email, accessLevel, blacklistedEmails=[] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }
//   blacklist(email) {
//     return this.blacklistedEmails.push(email)
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.some(listEmail => listEmail === email);
// }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
//   blacklistedEmails:[],
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
    
//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.
