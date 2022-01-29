import React, { Component } from "react";
import tvApi from "../services/tv-api";

export default class ShowDetails extends Component {
    state = {
        show: null,
    };

    componentDidMount() {
        tvApi.fetchShowDetails(this.props.match.params.showId).then((show) => {
            return this.setState({ show });
        });
    }

    render() {
        // console.log(this.props);
        return (
            <>
                {this.state.show && (
                    <>
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
