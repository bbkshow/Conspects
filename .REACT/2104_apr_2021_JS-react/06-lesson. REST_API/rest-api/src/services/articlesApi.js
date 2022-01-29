import axios from "axios";

function fetchArticlesWithQuery(searchQuery, page = 0) {
    return axios
        .get(
            `http://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}&hitsPerPage=5`
        )
        .then((response) => {
            return response.data.hits;
        });
}

const articlesApi = {
    fetchArticlesWithQuery,
};

export default articlesApi;
