import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { Field, Form, ErrorMessage, defineRule } from 'vee-validate';

import App from './App.vue'
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style/all.css';

//createApp(App).mount('#app')
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios,axios);
// 全域註冊VeeValidate元件
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
