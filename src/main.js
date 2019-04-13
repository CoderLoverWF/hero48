import Vue from 'vue'
// const Vue = require('vue');导入模块语法
//Common JS 模块化语法
// es6中导入模块的语法,推荐使用es6
import App from './App.vue';

// 导入bootstrap3.3.7
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//导入index.css自己写的样式，防止覆盖bootstrap中的样式
import './assets/css/index.css'
new Vue({
  el: '#app',
  render: h => h(App)
})
