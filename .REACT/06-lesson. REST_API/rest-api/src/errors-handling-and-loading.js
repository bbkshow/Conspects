import React, { Component } from "react";
import axios from "axios";
// https://hn.algolia.com/api

export default class App extends Component {
    state = {
        articles: [],
        error: false,
        loading: false,
    };

    componentDidMount() {
        this.setState({ loading: true });

        axios("http://hn.algolia.com/api/v1/search?query=react")
            .then((response) => {
                // console.log(response.data.hits);

                // this.setState({ loading: false });
                return this.setState({ articles: response.data.hits });
            })
            .catch((error) => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
    }

    render() {
        let { articles, error, loading } = this.state;
        let articlesItems = articles.map(({ objectID, title, url }) => (
            <li key={objectID}>
                <a href={url} target="_blanc">
                    {title}
                </a>
            </li>
        ));

        return (
            <div>
                {error && <p>Someting wrong....</p>}
                {loading && <div>Loading...</div>}
                {articles.length > 0 && <ul>{articlesItems}</ul>}
            </div>
        );
    }
}
