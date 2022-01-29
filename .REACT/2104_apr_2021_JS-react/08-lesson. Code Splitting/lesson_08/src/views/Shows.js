import React, { Component } from "react";
import { Link } from "react-router-dom";
import tvApi from "../services/tv-api";
import queryString from "../utils/getQueryParams";

import SearchForm from "../components/SearchForm";

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
        let { query } = queryString(this.props.location.search);
        // console.log(query);
        if (query) {
            return this.fetchShows(query);
        }
        this.fetchShows("cat");
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps);
        // console.log(this.props);

        let { query: prevQuery } = queryString(prevProps.location.search);
        let { query: nextQuery } = queryString(this.props.location.search);

        // console.log("prevQuery", prevQuery);
        // console.log("nextQuery", nextQuery);

        if (prevQuery !== nextQuery) {
            // console.log("Делаем запрос....");
            this.fetchShows(nextQuery);
        }
    }

    fetchShows = (query) => {
        tvApi.fetchShowWithQuery(query).then((shows) => {
            return this.setState({ shows });
        });
    };

    handleChangeQuery = (searchQuery) => {
        // console.log(searchQuery);
        // this.props.history.push("/about");
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${searchQuery}`,
        });
    };

    render() {
        let { match } = this.props;
        let { shows } = this.state;

        return (
            <div>
                <h1>Shows content</h1>

                <SearchForm onSubmit={this.handleChangeQuery} />

                <ul>
                    {shows.length > 0 &&
                        shows.map((show) => (
                            <li key={show.id}>
                                {/* <Link to={`${match.url}/${show.id}`}>
                                    <h1> {show.name}</h1>
                                    <img
                                        src={show.image.medium}
                                        alt={show.name}
                                    />
                                </Link> */}

                                <Link
                                    to={{
                                        pathname: `${match.url}/${show.id}`,
                                        // state: "Я пришел со стрaницы Shows",
                                        state: {
                                            from: this.props.location,
                                        },
                                    }}
                                >
                                    <h1> {show.name}</h1>
                                    <img
                                        src={show.image.medium}
                                        alt={show.name}
                                    />
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}
