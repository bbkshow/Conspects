import React from 'react';
import ReactDom from 'react-dom';

import Product from './Product';
import Section from './Section';

let arr = [1, 2, 3];

let App = props => {
    return (
        <>
            {arr.length > 0 && (
                <Section title="Популярные товары">
                    {/* <Section> */}
                    <Product
                        // imageUrl="https://images.pexels.com/photos/6861165/pexels-photo-6861165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="kebab"
                        name="Kebab"
                        price={10}
                        qty={60}
                    />
                </Section>
            )}

            <Section title="Просмотренные товары">
                {/* <Section> */}
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

// let names = ['Vova', 'Sara', 'Mike'];
// let App = props => {
//     return <>{names}</>;
// };

// import Booklist from './Booklist';
// import booksFromJson from '../books.json';

// let favoriteBooks = [
//     { id: 'id-1', title: 'the Kall of Ctulhy' },
//     { id: 'id-2', title: 'Hobbit' },
//     { id: 'id-3', title: 'Harry Potter' },
//     { id: 'id-4', title: 'Wither' },
//     { id: 'id-5', title: 'Green Mile' },
// ];

// let App = props => {
//     return (
//         <div>
//             {/* <Booklist books={favoriteBooks} /> */}
//             <Booklist books={booksFromJson} />
//         </div>
//     );
// };

export default App;
