let shop = {
  title: 'Silpo',
  adress: 'Kyiv',

  items: [
    { id: 1, name: 'apples', price: 36, amount: 300, category: 'fruits' },
    { id: 2, name: 'tomato', price: 45, amount: 150, category: 'veg' },
    { id: 3, name: 'bananas', price: 25, amount: 400, category: 'fruits' },
    { id: 4, name: 'potato', price: 10, amount: 800, category: 'veg' },
  ],

  showItems() {
    // console.log(this.items);
    // console.log(item);
    for (item of this.items) {
      //   console.log(item.name);
      //   console.log(item.price);
      console.log(
        `id: ${item.id}, name: ${item.name}, category: ${item.category}, price: ${item.price}, amount: ${item.amount},`
      );
    }
  },

  addItem(id, name, price, amount, category) {
    let newItem = {
      id,
      name,
      price,
      amount,
      category,
    };
    console.log(newItem);

    this.items.push(newItem);
  },

  updateItem(productName, newName) {
    for (let item of this.items) {
      if (item.name === productName) {
        item.name = newName;
        return;
      }
    }
    alert('Товар не найден');
  },

  //   removeItems(productName) {
  //     for (let item of this.items) {
  //       if (item.name === productName) {
  //         let elemIndex = this.items.indexOf(item);
  //         this.items.splice(elemIndex, 1);
  //       }
  //     }
  //   },

  removeItems(productName) {
    let len = this.items.length;
    for (let i = 0; i < len; i += 1) {
      if (productName === this.items[1].name) {
        // console.log(this.items[1].name);
        this.items.splice(i, 1);
        // return;
        break;
      }
    }
  },
};

// shop.addItem({id: 5, name: 'kiwi', price: 150, amount: 200, category: 'fruits'})
// shop.addItem(5, 'kiwi', 150, 200, 'fruits');
// shop.addItem(6, 'mango', 160, 100, 'fruits');

// shop.updateItem('bananas', 'bananasGold');
// shop.updateItem('pizza', 'bananasGold');
// shop.updateItem('bananas');
// shop.removeItems('bananas');
shop.removeItems('tomato');

shop.showItems();

// https://www.w3schools.com/js/js_break.asp

//break, continue
