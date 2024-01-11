import Vue from "vue";
import App from "./App";
import VueI18n from "vue-i18n";
const messages = {
  en: {
    "schema.name": "Name",
    message: {
      hello: "hello world",
    },
  },
  ja: {
    "schema.name": "メッセージ",
    message: {
      hello: "こんにちは、世界",
    },
  },
  "zh-Hans": {
    "schema.name": "姓名",
    message: {
      hello: "你好，世界",
    },
  },
};
let i18nConfig = {
  // locale: "en", // 获取已设置的语言
  locale: uni.getLocale(), // 获取已设置的语言
  fallbackLocale: "en", // set fallback locale

  messages,
};
Vue.use(VueI18n);
const i18n = new VueI18n(i18nConfig);
App.mpType = "app";
Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  i18n,
  ...App,
});
app.$mount();
