// let user = {
//   name: 'Mike',
//   age: 25,
//   city: 'Montreal',
//   country: 'Canada',
// };

// // console.log(user.city);

// let { city, country } = user;
// console.log(city);
// console.log(country);

let car = {
  speed: 180,
  model: 'X5',
  manufacturer: 'BMW',
  engiens: ['200', '250', '350'],
  carData: {
    vin: 23131213232,
    city: 'Munich',
    year: 2021,
    color: 'blue',
    tyresOptions: {
      radius: 22,
      season: 'summer',
    },
  },
};

// console.log(car.carData.tyresOptions.radius);

// let { radius: tyreRadius } = car.carData.tyresOptions;
// console.log(tyreRadius);

// if (tyreRadius == 22) {
//   console.log('Литые диски');
// }

// let { year: manufacturingYear } = car.carData;
// // console.log(year);
// console.log(manufacturingYear);

//=========================
// Default value
// let { model = 'ZX' } = car.model; // ZX
// console.log(model);
