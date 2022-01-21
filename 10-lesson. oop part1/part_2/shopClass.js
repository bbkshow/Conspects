//  Shop Class

// function genarateID() {
//     return Math.random().toString().slice(2);
// }

class Shop {
  // Pivate field
  #items;

  constructor(title, adrdes, items) {
    this.title = title;
    this.adrdes = adrdes;
    this.#items = items;
  }

  // Private method
  #genarateID() {
    return Math.random().toString().slice(2);
  }

  showItems() {
    for (let item of this.#items) {
      console.log(
        `id: ${item.id}, name: ${item.name}, category: ${item.category}, price: ${item.price}, amount: ${item.amount},`
      );
    }
  }

  addItem({ name, price, amount, category }) {
    let newItem = {
      id: this.#genarateID(),
      name,
      price,
      amount,
      category,
    };
    this.items.push(newItem);
  }

  // addItem(newItemObj) {
  //     let { id, name, price, amount, category } = newItemObj;

  //     let newItem = {
  //         id,
  //         name,
  //         price,
  //         amount,
  //         category,
  //     };
  //     this.items.push(newItem);
  // }

  // addItem(newItem) {
  //     this.items.push(newItem);
  // }

  updateItem(productName, newName) {
    for (let item of this.items) {
      if (item.name === productName) {
        item.name = newName;
        return;
      }
    }
    alert('Товар не найден');
  }

  removeItems(productName) {
    let len = this.items.length;
    for (let i = 0; i < len; i += 1) {
      if (productName === this.items[i].name) {
        this.items.splice(i, 1);
        break;
      }
    }
  }
}

let itemsAtb = [
  { id: 1, name: 'apples', price: 36, amount: 300, category: 'fruits' },
  { id: 2, name: 'tomato', price: 45, amount: 150, category: 'veg' },
  { id: 3, name: 'bananes', price: 25, amount: 400, category: 'fruits' },
  { id: 4, name: 'potato', price: 10, amount: 800, category: 'veg' },
];

let atb = new Shop('ATB', 'Kyiv', itemsAtb);

// atb.addItem({ name: 'pizza', price: 180, amount: 5, category: 'food' },);
// atb.addItem({ name: 'beer', price: 40, amount: 5, category: 'alcohol' },);
// atb.showItems();

// console.log(atb.genarateID());
// console.log(atb.genarateID());

// console.log(atb.items);
console.log(atb.#items);
atb.showItems();
