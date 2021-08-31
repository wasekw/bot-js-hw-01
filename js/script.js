// let balance = 1000;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`
// );
// if (balance > payment) {
//   balance = balance - payment;
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log("На счету недостаточно средств для проведения операции");
// }
// console.log("Операция завершена");
// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;
// if (totalSpent > 100) {
// }
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

// const number = 100;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }

// Change code below this line
//
//
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;
//   console.log(totalPrice);
//   // Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   console.log(message);

//   // Change code above this line
//   return message;
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;
//   console.log(passed);
//   // Change code above this line
//   return passed;
// }
// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

//
//
// function checkStorage(available, ordered) {
//   let message;

//   // Change code below this line
//   if (available >= ordered) {
//     message = "Order is processed, our manager will contact you.";
//   } else {
//     message = "Not enough goods in stock!";
//   }
//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   let totalPrice = pricePerDroid * orderedQuantity;
//   // Change code below this line
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }
//   console.log(message);
//   // Change code above this line
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

//
//
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
//   console.log(isInRange);
//   return isInRange;
// }
// isNumberInRange(10, 30, 1);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

//
//
//
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//     default:
//       message = "Access denied, wrong password!";
//   }
//   console.log(message);
//   // Change code above this line
//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword("null");
// checkPassword("polygax");
// checkPassword("jqueryismyjam");

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   let price;
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   console.log(message);
//   // Change code above this line
//   return message;
// }
// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");
//
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//   console.log(message);
//   return message;
// }
// getNameLength("Poly");
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");

// const productName = "Repair droid";
// console.log(productName[0]); // "R"
// console.log(productName[5]); // "r"
// console.log(productName[11]); // "d"
// console.log(productName[productName.length - 6]); // "
//
//
// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);
//
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//   console.log(substring);
//   return substring;
// }
// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);
//
// function formatMessage(message, maxLength) {
//   let result;
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + "...";
//   }
//   console.log(result);
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);
//
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();
//   console.log(normalizedInput);
//   return normalizedInput;
// }
// normalizeInput("Hello world");
// normalizeInput("This ISN'T SpaM");
// normalizeInput("Big SALE");
//
// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   console.log(result);
//   return result;
// }
// checkForName("Egor Kolbasov", "egor");
// checkForName("Egor Kolbasov", "egOr");
// checkForName("Egor Kolbasov", "Zhenya");
// checkForName("Vadim Nekrasov", "Vadim");
// checkForName("Vadim Nekrasov", "vadim");
// checkForName("Vadim Nekrasov", "Dima");
//
function checkForSpam(message) {
  let result;
  message = message.toLowerCase();
  if (message.includes("spam") || message.includes("sale")) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
  return result;
}
checkForSpam("Latest technology news");
checkForSpam("Get best sale offers now!");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
