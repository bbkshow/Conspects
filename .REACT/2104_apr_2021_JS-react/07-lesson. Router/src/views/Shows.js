import React, { Component } from "react";

import { Link } from "react-router-dom";

import tvApi from "../services/tv-api";

// history;
// location;
// match;

// path: "/shows",
// url: "/shows",

// this.props.match
// this.state.shows

export default class Shows extends Component {
    state = {
        shows: [],
    };

    componentDidMount() {
        tvApi.fetchShowWithQuery("cat").then((shows) => {
            return this.setState({ shows });
        });
    }

    render() {
        let { match } = this.props;
        let { shows } = this.state;

        return (
            <div>
                <h1>Shows content</h1>
                <ul>
                    {shows.length > 0 &&
                        shows.map((show) => (
                            <li key={show.id}>
                                <Link to={`${match.url}/${show.id}`}>
                                    <h1> {show.name}</h1>
                                    <img src={show.image.medium} />
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}

// export default function Shows({ match }) {
//     // console.log(match);

//     const shows = [
//         { id: "id-1", name: "Shows name 1" },
//         { id: "id-2", name: "Shows name 2" },
//         { id: "id-3", name: "Shows name 3" },
//         { id: "id-4", name: "Shows name 4" },
//     ];

//     return (
//         <div>
//             <h1>Shows content</h1>
//             <ul>
//                 {shows.map((show) => (
//                     // <li key={show.id}>{show.name}</li>
//                     // <li key={show.id}>
//                     //     <Link to={`/shows/${show.id}`}>{show.name}</Link>
//                     // </li>
//                     <li key={show.id}>
//                         <Link to={`${match.url}/${show.id}`}>{show.name}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
