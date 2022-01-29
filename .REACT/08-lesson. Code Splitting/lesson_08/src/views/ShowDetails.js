import React, { Component } from "react";
import tvApi from "../services/tv-api";
import routes from "../routes";

export default class ShowDetails extends Component {
    state = {
        show: null,
    };

    componentDidMount() {
        tvApi.fetchShowDetails(this.props.match.params.showId).then((show) => {
            return this.setState({ show });
        });
    }

    // handleGoBack = () => {
    //     if (this.props.location.state && this.props.location.state.from) {
    //         return this.props.history.push(this.props.location.state.from);
    //     }
    //     this.props.history.push(routes.shows);
    // };

    handleGoBack = () => {
        let { state } = this.props.location;
        let { from } = this.props.location.state;
        let { history } = this.props;

        if (state && from) {
            return history.push(from);
        }
        this.props.history.push(routes.shows);
    };

    render() {
        // console.log(this.props);
        return (
            <>
                {this.state.show && (
                    <>
                        <button type="button" onClick={this.handleGoBack}>
                            Go back to shows
                        </button>
                        <hr />
                        <img
                            src={this.state.show.image.medium}
                            alt={this.state.show.name}
                        />
                        <h1>{this.state.show.name}</h1>
                        {this.state.show.summary}
                    </>
                )}
            </>
        );
    }
}

// import React from "react";

// export default function ShowDetails({ match }) {
//     return <div>ShowDetails {match.params.showId}</div>;
// }
