import React from 'react';
import ReactDOM from 'react-dom';

import Product from './Product';
import Section from './Section';
import Booklist from './Booklist';
import BasicButtons from './Button';

import booksFromJson from '../books.json';

// let App = (props) => {
//   return (
//     <>
//       <Section title="Популярные товары">
//         <Product
//           imageUrl="https://media.istockphoto.com/photos/greek-gyros-wraped-in-a-pita-bread-on-a-wooden-background-picture-id959937952?s=612x612"
//           name="Kebab"
//           alt="kebeb"
//           price={10}
//           qty={60}
//         />
//       </Section>

//       <Section title="Просмотренные товары">
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

let App = (props) => {
  return (
    <div>
      <Booklist books={booksFromJson} />
    </div>
  );
};

// let App = (props) => {
//   return (
//     <div>
//       <BasicButtons />
//     </div>
//   );
// };

export default App;
