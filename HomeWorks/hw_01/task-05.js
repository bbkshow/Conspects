let country = prompt('Введите страну доставки').toLowerCase();
let correctCountry =
  country[0].toUpperCase() + country.slice(1, country.length);

switch (correctCountry) {
  case 'Китай':
    alert(`Доставка в ${correctCountry} будет стоить 150 кредитов`);
    break;

  case 'Чили':
    alert(`Доставка в ${correctCountry} будет стоить 250 кредитов`);
    break;

  case 'Австралия':
    alert(`Доставка в ${correctCountry} будет стоить 165 кредитов`);
    break;

  case 'Индия':
    alert(`Доставка в ${correctCountry} будет стоить 90 кредитов`);
    break;

  case 'Ямайка':
    alert(`Доставка в ${correctCountry} будет стоить 130 кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
    break;
}
