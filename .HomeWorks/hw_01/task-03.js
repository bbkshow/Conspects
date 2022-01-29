let message = prompt('Введите пароль');
let adminPass = 'ADMIN_PASSWORD';

if (message === null) {
  alert('Отменено пользователем');
} else if (message === adminPass) {
  alert('Добро пожаловать');
} else {
  alert('Доступ запрещен, неверный пароль');
}
