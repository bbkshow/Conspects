import React, { Component } from "react";
// import axios from "axios";

import Notification from "./components/Notification";
import Spinner from "./components/Spinner";
import ArticlesList from "./components/ArticlesList";
import SearchFrom from "./components/SearchFrom";

import articlesApi from "./services/articlesApi";

export default class App extends Component {
    state = {
        articles: [],
        error: false,
        loading: false,
        page: 0,
        searchQuery: "",
    };

    // componentDidMount() {
    //     this.setState({ loading: true });

    //     articlesApi
    //         .fetchArticlesWithQuery("html")
    //         .then((articles) =>
    //             this.setState((prevState) => ({
    //                 articles: [...prevState.articles, ...articles],
    //                 page: prevState.page + 1,
    //             }))
    //         )
    //         .catch((error) => this.setState({ error }))
    //         .finally(() => this.setState({ loading: false }));
    // }

    componentDidUpdate(prevProps, prevState) {
        // console.log("prevState", prevState);
        // console.log("this.state", this.state);

        if (prevState.searchQuery !== this.state.searchQuery) {
            console.log("Делаем запрос");
            this.fetchArticles();
        }
    }

    fetchArticles = () => {
        let { page, searchQuery } = this.state;
        this.setState({ loading: true });

        articlesApi
            .fetchArticlesWithQuery(searchQuery, page)
            .then((articles) =>
                this.setState((prevState) => ({
                    articles: [...prevState.articles, ...articles],
                    page: prevState.page + 1,
                }))
            )
            .catch((error) => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
    };

    handleSearchFormSubmit = (text) => {
        this.setState({
            searchQuery: text,
            page: 0,
            articles: [],
        });
    };

    render() {
        let { articles, error, loading } = this.state;

        return (
            <div>
                {error && (
                    <Notification
                        message={`Someting wrong...${error.message}`}
                    />
                )}
                {loading && <Spinner message="Loading..." />}
                <SearchFrom onSubmit={this.handleSearchFormSubmit} />

                {articles.length > 0 && <ArticlesList articles={articles} />}

                {articles.length > 0 && !loading && (
                    <button type="button" onClick={this.fetchArticles}>
                        Load more...
                    </button>
                )}
            </div>
        );
    }
}
