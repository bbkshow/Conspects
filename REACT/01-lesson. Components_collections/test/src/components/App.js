import React from 'react';
import Product from './Product';
import Section from './Section';

// let arr = [1, 2, 3];

// let App = (props) => {
//   return (
//     <>
//       {arr.length > 0 && (
//         <Section title="Популярные товары">
//           {/* <Section> */}
//           <Product
//             //   imageUrl="https://media.istockphoto.com/photos/greek-gyros-wraped-in-a-pita-bread-on-a-wooden-background-picture-id959937952?s=612x612"
//             name="Kebab"
//             alt="kebeb"
//             price={10}
//             qty={60}
//           />
//         </Section>
//       )}

//       <Section title="Просмотренные товары">
//         {/* <Section> */}
//         <Product
//           imageUrl="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//           name="Pizza"
//           alt="pizza"
//           price={15}
//           qty={10}
//         />
//       </Section>
//     </>
//   );
// };

// let names = ['Vova', 'Sara', 'Mike'];

// let App = (props) => {
//   return <>{names}</>;
// };

import Booklist from './Booklist';
import booksFromJson from '../books.json';

// let favoritBooks = [
//   { id: 'id-1', name: 'Kall of Ctulhy' },
//   { id: 'id-2', name: 'Hobbit' },
//   { id: 'id-3', name: 'Harry Potter' },
//   { id: 'id-4', name: 'Witcher' },
//   { id: 'id-5', name: 'Green mile' },
// ];

let App = (props) => {
  return (
    <div>
      <Booklist books={booksFromJson} />
    </div>
  );
};

export default App;
