import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';// 引入 VeeValidate 元件跟功能
import * as AllRules from '@vee-validate/rules';// 引入 VeeValidate 的驗證規則
import { localize, setLocale } from '@vee-validate/i18n';// 引入 VeeValidate 的 i18n 功能
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Loading from 'vue-loading-overlay';

import App from './App.vue'
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style/all.css';
import 'vue-loading-overlay/dist/css/index.css';
import 'material-symbols';

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });
  
  // 將當前 VeeValidate 的語系設定為繁體中文
  configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true,
  });
  setLocale('zh_TW');
  
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios,axios);
// 全域註冊VeeValidate元件
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);
app.component('Loading', Loading); // 使用 Loading 组件

app.mount('#app');
