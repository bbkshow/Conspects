let credits = 35500;
let pricePerDroid = 3000;
let orderDroid = prompt('Сколько друидов вы хотите купить?');
let totalPrice = orderDroid * pricePerDroid;
let balance = credits - totalPrice;

if (orderDroid === null) {
  alert('Отменено пользователем');
} else if (totalPrice > credits) {
  alert('Недостаточно средств на счету');
} else {
  alert(
    `Вы купили ${orderDroid} друидов, на счету осталось ${balance} кредитов.`
  );
}
