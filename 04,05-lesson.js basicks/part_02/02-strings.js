// console.log('From strings');

// ''
// ""
// `` tamplate string (шаблонная строка)

// let firstName = "John";
// let lastName = "Snow";

//=====================================================
// Concatenate
// let user = firstName + " " + lastName + " " + "Stark";
// console.log(user);

// ${firstName}
// let user = `${firstName} ${lastName} hello world`;
// console.log(user);

//=================================
// Append (накопить)
// let firstName = "John";
// let lastName = "Snow";

// firstName += " " + "Sara";
// // firstName = firstName + " " + "Sara";
// console.log(firstName);

// let num1 = 80;
// let num2 = 10;
// // let total = num1 * num2;
// // let total = num1 * num2;
// console.log(total);

// num1 *= num2;
// console.log(num1);
// num1 /= num2;
// console.log(num1);
// num1 += num2;
// console.log(num1);
// num1 -= num2;
// console.log(num1);

// ================================
// Escaping (экранирование)
// \t, \n, \r

// let text = "Don't worry be happy";
// let text = "Don't worry be\n happy"; новая строка
// // let text = "Don\'t worry be happy"; символ экранирования
// console.log(text);

// ==============================
// Concat

// let firstName = "John";
// let lastName = "Snow";

// let userData = firstName.concat(lastName);
// console.log(userData);

//==========================
// Lenght
// let lastName = "Snow";
// console.log(lastName.length);

//===============================
// Get symbol
let firstName = "John";
// firstName[0]
// firstName[1]
// firstName[2]
// firstName[3]

// console.log(firstName[1]);
// console.log(firstName[2]);

// let ch = firstName.charAt(1);
// ch = firstName.charAt(2);
// console.log(ch);

// console.log(firstName.charCodeAt(0));
// console.log(firstName.charCodeAt(1));
// console.log(firstName.charCodeAt(3));

// console.log("a".charCodeAt(0));
// console.log("B".charCodeAt(0));
// console.log("c".charCodeAt(0));
// console.log("r".charCodeAt(0));
// console.log("g".charCodeAt(0));
// console.log("F".charCodeAt(0));

// console.log("John".length);

//===========================
// Substring

// let js = "JavaScript";
// let val = js.substr(); //JavaScript
// let val = js.substr(4); // Script
// let val = js.substr(0, 4); // Java

// console.log(val);

//====================================
// Slice

// let js = "JavaScript";
// let val = js.slice();
// console.log(val === js);
// console.log(js.slice(4)); // Script
// console.log(js.slice(0, 4)); // Java

//===========================
// Includes

// let js = "JavaScript";
// let val = "Script";
// val = "pizza";

// // let result = js.includes(val);
// let result = js.includes("Script");
// console.log(result);

// let postText =
//   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ea possimus, ipsum natus cumque optio recusandae explicabo facilis beatae? spamder Accusamus quisquam consectetur cum molestiae excepturi consequuntur minima id ullam quae!";

// let spamWord = "spam";

// if (postText.includes(spamWord)) {
//   console.log("Need to moderate");
// } else {
//   console.log("Good to go");
// }

//===========================================
// Replace

// let js = "JavaScript";

// let val = js.replace("JavaScript", "Pizza");
// // let val = js.replace("Java", "Pizza");
// let val = js.replace("Java", "Pizza");
// console.log(val);

// let postText =
//   "Lorem ipsum, dolor sit amet consectetur spam adipisicing elit. Similique ea possimus, ipsum natus cumque optio recusandae explicabo facilis beatae? spam Accusamus quisquam consectetur cum molestiae excepturi consequuntur minima id ullam quae!";

// let moderatedPost = postText.replace("spam", "hello");
// console.log(moderatedPost);

//==================================
// Change registry

// "vova".toUpperCase();
// "vova".toLowerCase();
// "vova".toLocaleLowerCase()
// "vova".toLocaleUpperCase()

// let userName = "vova";
// let admin = "SARA";

// console.log(userName.toLowerCase());
// console.log(admin.toLowerCase());

// let userName = "vova";
// Vova

// console.log(userName[0].toUpperCase());
// console.log(userName.slice(1));

// let parsedName = userName[0].toUpperCase() + userName.slice(1);
// console.log(parsedName);
