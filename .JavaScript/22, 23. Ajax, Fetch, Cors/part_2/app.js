/*
Thank you for registering with the open platform.
A new key has been created for you: 3534a47c-f615-488a-ac2b-1cbb3a5481ee
You can try this key by accessing https://content.guardianapis.com/search?api-key=3534a47c-f615-488a-ac2b-1cbb3a5481ee in your browser.
*/

// https://open-platform.theguardian.com/documentation/
// Example: https://content.guardianapis.com/search?page=2&q=debate&api-key=test

// class News {
//     init = () => {
//         let API_KEY = "3534a47c-f615-488a-ac2b-1cbb3a5481ee";
//         let URL = `https://content.guardianapis.com/search?lang=en&q=coronavirus&api-key=${API_KEY}&page-size=5&page=3`;
//         fetch(URL)
//             .then((res) => res.json())
//             .then(this.logData);
//     };

//     logData = (data) => {
//         console.log(data);
//     };
// }

class News {
    constructor(url) {
        this.url = url;
        this.prevButton = document.querySelector("#prev");
        this.nextButton = document.querySelector("#next");
        this.input = document.querySelector("input");
        this.span = document.querySelector(".page-amount");
        this.list = document.querySelector(".list");
        this.counter = 1;
    }

    fetchNews = () => {
        // let parsedUrl = this.pageNumberParser(this.url, this.counter);

        let url = this.url + this.counter;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.response.status === "ok") {
                    this.renderNews(data.response.results);
                    this.renderPagination(data.response);
                }
            })
            .catch((err) => console.log(err.message));
    };

    pageNumberParser = (str, pageNumber) => {
        let parsed = str.split("&");
        console.log(parsed);
        parsed[1] = `page=${pageNumber}`;
        return parsed.join("&");
    };

    renderNews = (arrResults) => {
        this.list.innerHTML = "";
        // console.log(arrResults);

        let liCollection = arrResults.map(
            ({ webUrl, webTitle, webPublicationDate }) => {
                let li = document.createElement("li");
                let a = document.createElement("a");
                let p = document.createElement("p");

                a.setAttribute("href", webUrl);
                a.setAttribute("target", "_blank");

                a.textContent = webTitle;

                p.textContent = `Publication date: ${webPublicationDate}`;

                a.append(p);
                li.append(a);
                return li;
            }
        );
        this.list.append(...liCollection);
    };

    renderPagination(response) {
        this.span.textContent = response.pages;
        this.input.value = response.currentPage;
    }

    prevPage = () => {
        this.counter -= 1;
        this.fetchNews();
        this.input.value = this.counter;
    };

    nextPage = () => {
        this.counter += 1;
        this.fetchNews();
        this.input.value = this.counter;
    };

    inputChange = (event) => {
        let inputValue = event.target.value;
        this.counter = Number(inputValue);

        if (!inputValue) {
            return;
        }
        this.fetchNews();
    };

    addListeners = () => {
        this.prevButton.addEventListener("click", this.prevPage);
        this.nextButton.addEventListener("click", this.nextPage);
        this.input.addEventListener("input", this.inputChange);
        window.addEventListener("load", this.fetchNews);
    };

    init = () => {
        this.addListeners();
    };
}

let API_KEY = "3534a47c-f615-488a-ac2b-1cbb3a5481ee";
// let URL = `https://content.guardianapis.com/search?page=1&lang=en&q=coronavirus&api-key=${API_KEY}&page-size=5&show-elements=image`;

let URL = `https://content.guardianapis.com/search?lang=en&q=football&api-key=${API_KEY}&page-size=10&show-elements=image&page=`;

new News(URL).init();

// fetch(URL)
//     .then((res) => res.json())
//     // .then(logData);
//     .then((data) => logData(data));

// function logData(data) {
//     console.log(data);
// }

// let str = `https://content.guardianapis.com/search?lang=en&q=coronavirus&api-key=${API_KEY}&page-size=5&page=3&show-elements=image`;

// function parseSting(str, page_number) {
//     let parsed = str.split("&");
//     // console.log(parsed);
//     parsed[4] = `page=${page_number}`;

//     // console.log(parsed);

//     return parsed.join("&");
// }
// console.log(parseSting(str, 5));
