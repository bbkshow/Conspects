import React, { Component } from 'react';

// export default class SignupForm extends Component {
//     state = {
//         inputValue: '',
//     };

//     handleInputChange = event => {
//         this.setState({ inputValue: event.target.value });
//     };

//     render() {
//         return (
//             <input
//                 type="text"
//                 value={this.state.inputValue}
//                 onChange={this.handleInputChange}
//             />
//         );
//     }
// }

let Subscription = {
    FREE: 'free',
    BASIC: 'basic',
    PRO: 'pro',
};
export default class SignupForm extends Component {
    state = {
        email: '',
        password: '',
        subscription: '',
        age: '',
        agreed: false,
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log('Submit');
    };

    handleChange = event => {
        // console.log(event.target.value);
        // console.log(event.target.name);
        let { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubscriptionChange = event => {
        let { value } = event.target;
        this.setState({
            subscription: value,
        });
    };

    handleAgeChange = event => {
        let { value } = event.target;
        this.setState({
            age: value,
        });
    };

    handleAgreedChange = event => {
        // console.log(event.target.checked);
        this.setState({
            agreed: event.target.checked,
        });
    };

    render() {
        let { email, password, subscription, age, agreed } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={this.handleChange}
                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        name="password"
                        onChange={this.handleChange}
                    />
                </label>
                <br></br>
                <br></br>
                <div role="group">
                    <label>
                        Free
                        <input
                            type="radio"
                            value={Subscription.FREE}
                            checked={Subscription.FREE === subscription}
                            onChange={this.handleSubscriptionChange}
                        />
                    </label>
                    <label>
                        Basic
                        <input
                            type="radio"
                            value={Subscription.BASIC}
                            checked={Subscription.BASIC === subscription}
                            onChange={this.handleSubscriptionChange}
                        />
                    </label>
                    <label>
                        Pro
                        <input
                            type="radio"
                            value={Subscription.PRO}
                            checked={Subscription.PRO === subscription}
                            onChange={this.handleSubscriptionChange}
                        />
                    </label>
                </div>

                <br></br>
                <br></br>

                <label>
                    Choose age
                    <select
                        name="age"
                        value={age}
                        onChange={this.handleAgeChange}
                    >
                        <option value="" disabled>
                            Choose an option
                        </option>
                        <option value="16...25">16...25</option>
                        <option value="26...35">26...35</option>
                        <option value="35...45+">35...45+</option>
                    </select>
                </label>

                <br></br>
                <br></br>
                <label>
                    Согласиться с лицензией
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={this.handleAgreedChange}
                    />
                    <br></br>
                    <button type="submit" disabled={!agreed}>
                        Signup!
                    </button>
                </label>
            </form>
        );
    }
}
