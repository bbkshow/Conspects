import React, { Component } from "react";
import Layout from "./Layout";
// import Tasks from "./Tasks/Tasks";
// import Modal from "./Modal";
// import Clock from "./Clock";
import Tabs from "./Tabs";
import tabs from "../tabs.json";

export default class App extends Component {
    // state = {
    //     showModal: false,
    // };

    // toggleModal = () => {
    //     this.setState((prevState) => ({
    //         showModal: !prevState.showModal,
    //     }));
    // };

    render() {
        // let { showModal } = this.state;

        return (
            <Layout>
                {/* <Tasks /> */}
                {/* ============================= */}
                {/* {!showModal && (
                    <button onClick={this.toggleModal} type="button">
                        Open modal
                    </button>
                )} */}
                {/* {showModal && (
                    <Modal
                        onClose={this.toggleModal}
                        onCloseModal={this.toggleModal}
                    >
                        <h2>Modal title</h2>
                        <p>lorem ipsum dolor sit amet...</p>
                        <button onClick={this.toggleModal} type="button">
                            Close modal
                        </button>
                    </Modal>
                )} */}
                {/* ========================= */}
                {/* {!showModal && (
                    <button onClick={this.toggleModal} type="button">
                        Close Clock
                    </button>
                )}
                {!showModal && <Clock />} */}
                {/* =========================== */}
                <Tabs items={tabs} />
            </Layout>
        );
    }
}

// Common lifecycle methods
// export default class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             test: "qwe",
//         };

//         console.log("Constructor...");
//     }

//     componentDidMount() {
//         console.log("componentDidMount...");
//         // http requests
//         // addEventListener
//         // this.setState()
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log("prevProps", prevProps);
//         console.log("prevState", prevState);

//         // console.log("componentDidUpdate...");
//     }

//     componentWillUnmount() {
//         // http requests
//         // removeEventListener
//         // снимаем таймеры
//         // боремся с утечкамим памяти
//     }

//     render() {
//         console.log("Render...");
//         return (
//             <Layout>
//                 <Tasks />
//                 {/* <Modal />
//                 <Clock />
//                 <Tabs /> */}
//             </Layout>
//         );
//     }
// }
