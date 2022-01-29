import React, { Component } from "react";
import axios from "axios";
// https://hn.algolia.com/api

export default class App extends Component {
    state = {
        articles: [],
        error: false,
    };

    componentDidMount() {
        axios("http://hn.algolia.com/api/v1/search?query=react")
            .then((response) => {
                // console.log(response.data.hits);
                return this.setState({ articles: response.data.hits });
            })
            .catch((error) => this.setState({ error }));
    }

    render() {
        let { articles } = this.state;
        let articlesItems = articles.map(({ objectID, title, url }) => (
            <li key={objectID}>
                <a href={url} target="_blanc">
                    {title}
                </a>
            </li>
        ));

        return <ul>{articlesItems}</ul>;
    }
}
