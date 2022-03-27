import React, { Component } from 'react';
import Layout from './Layout';
// import Tasks from './Tasks';
// import Modal from './Modal/Modal';
// import Clock from './Clock/Clock';
import Tabs from './Tabs/Tabs';
import tabs from '../tabs.json';

// export default class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             test: 'qwe',
//         };

//         console.log('Constructor...');
//     }

//     componentDidMount() {
//         console.log('componDidMount...');
//     }
//     componentDidUpdate(prevProps, prevState) {
//         console.log('prevProps', prevProps);
//         console.log('prevState', prevState);
//         // console.log('comDidUpdate...');
//     }

//     componentWillUnmount() {

//     }

//     render() {
//         console.log('Render...');
//         return (
//             <Layout>
//                 <Tasks />
//             </Layout>
//         );
//     }
// }

export default class App extends Component {
    render() {
        return (
            <Layout>
                {/* <Tasks /> */}
                {/* {!showmodal && (
                    <button onClick={this.toggleModal} type="button">
                        Open modal
                    </button>
                )}
                {showmodal && (
                    <Modal
                        onClose={this.toggleModal}
                        onCloseModal={this.toggleModal}
                    >
                        <h2>Modal tittle</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button onClick={this.toggleModal} type="button">
                            Close modal
                        </button>
                    </Modal>
                )} */}

                {/* {!showmodal && (
                    <button onClick={this.toggleModal} type="button">
                        Close Clock
                    </button>
                )}
                {!showmodal && <Clock />} */}
                <Tabs items={tabs} />
            </Layout>
        );
    }
}
