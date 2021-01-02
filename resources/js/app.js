require("./bootstrap");

Window.Vue = require("vue");

import router from "./routers";

Vue.component("app-component", require("./components/App.vue").default);

const app = new Vue({
    router,
    mode: "history",
    el: "#app"
});
