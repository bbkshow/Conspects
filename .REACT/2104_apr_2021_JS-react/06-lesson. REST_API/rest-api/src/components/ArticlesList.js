import React from "react";

export default function ArticlesList({ articles }) {
    let articlesItems = articles.map(({ objectID, title, url }) => (
        <li key={objectID}>
            <a href={url} target="_blanc">
                {title}
            </a>
        </li>
    ));

    return <ul>{articlesItems}</ul>;
}
