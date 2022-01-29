import { alert, notice, info, success, error } from "@pnotify/core";

import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/Material.css";
{
    /* <link href="node_modules/@pnotify/core/dist/PNotify.css" rel="stylesheet" type="text/css" /> */
}

// Manually set the type.
const myAlert = alert({
    text: "I'm an alert.",
    type: "info",
});

// Automatically set the type.
const myNotice = notice({
    text: "I'm a notice.",
});

const myInfo = info({
    text: "I'm an info message.",
});

const mySuccess = success({
    text: "I'm a success message.",
});

const myError = error({
    text: "I'm an error message.",
});

// let alerts = {
//     myAlert,
//     myNotice,
//     myInfo,
//     mySuccess,
//     myError,
// };

function testSuccess() {
    return success({
        text: "I'm a success message.",
    });
}

let alerts = {
    testSuccess,
};

export default alerts;
