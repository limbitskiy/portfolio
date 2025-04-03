import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";

// components
import Portfolio from "@/components/Portfolio.vue";
import Project from "@/components/Project.vue";
import IconText from "@/components/UI/IconText.vue";
import IconLink from "@/components/UI/IconLink.vue";

const app = createApp(App);

app.component("Portfolio", Portfolio);
app.component("Project", Project);
app.component("IconText", IconText);
app.component("IconLink", IconLink);

app.mount("#app");
