require("./bootstrap");

import Vue from "vue";
import HelloWorld from "./component/HelloWorld";

Vue.component("hello-world", HelloWorld);

const app = new Vue({
    el: "#app",
}).$mount("#app");
