// {
//     "workbench.iconTheme": "material-icon-theme",
//     "editor.fontSize": 18,
//     "[javascript]": {
//         "editor.defaultFormatter": "esbenp.prettier-vscode"
//     },
//     "terminal.integrated.cursorWidth": 3,
//     "editor.cursorWidth": 3,
//     "editor.renderWhitespace": "boundary",
//     "editor.wordWrap": "on",
//     "editor.formatOnSave": true,
//     "javascript.updateImportsOnFileMove.enabled": "always",
//     "workbench.colorTheme": "Atom One Dark",
//     "prettier.tabWidth": 4,
//     "workbench.editorAssociations": {
//         "*.ipynb": "jupyter.notebook.ipynb"
//     }
// }

let vova = {
    name: "vova",
    age: "30",
    status: "admim",

    convetToString() {
        return `${this.name}, ${this.age}, ${this.status}`;
    },
};

let sara = {
    name: "sara",
    age: "30",
};

// JSON
// JSON.stringify
let strVova = JSON.stringify(vova);
console.log(strVova);
console.log(typeof strVova);

// JSON.parse;
let vovaObj = JSON.parse(strVova);
console.log(vovaObj);

// console.log(vova.convetToString());
