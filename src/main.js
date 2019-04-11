import Vue from 'vue'
// const Vue = require('vue');导入模块语法
//Common JS 模块化语法
// es6中导入模块的语法,推荐使用es6
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
