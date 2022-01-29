import React from 'react';
import ReactDom from 'react-dom';

import Product from './Product';
import Section from './Section';
import Booklist from './Booklist';

// CSS
import booksFromJson from '../books.json';

let App = props => {
    return (
        <>
            <Section title="Популярные товары">
                <Product
                    imageUrl="https://images.pexels.com/photos/6861165/pexels-photo-6861165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="kebab"
                    name="Kebab"
                    price={10}
                    qty={60}
                />
            </Section>

            <Section title="Просмотренные товары">
                <Product
                    imageUrl="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="kebab"
                    name="Pizza"
                    price={15}
                    qty={10}
                />
            </Section>
        </>
    );
};

// ===================================================
// INLINE CSS
// let styles = {
//     container: { backgroundColor: 'gray', outline: '2px solid black' },
// };

// let App = props => {
//     return (
//         <>
//             <Section title="Популярные товары">
//                 <div
//                     style={{
//                         backgroundColor: 'gray',
//                         outline: '2px solid black',
//                     }}
//                 >
//                     <Product
//                         imageUrl="https://images.pexels.com/photos/6861165/pexels-photo-6861165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//                         alt="kebab"
//                         name="Kebab"
//                         price={10}
//                         qty={60}
//                     />
//                 </div>
//             </Section>

//             <Section title="Просмотренные товары">
//                 <div style={styles.container}>
//                     <Product
//                         imageUrl="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//                         alt="kebab"
//                         name="Pizza"
//                         price={15}
//                         qty={10}
//                     />
//                 </div>
//             </Section>
//         </>
//     );
// };
// ==========================================

// let App = props => {
//     return (
//         <div>
//             <Booklist books={booksFromJson} />
//         </div>
//     );
// };

export default App;
