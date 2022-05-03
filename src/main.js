import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem } from 'vant';
import './styles/index.less'

createApp(App).use(store).use(router).use(Tabbar).use(TabbarItem).mount('#app')
