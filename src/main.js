// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MuseUI from 'muse-ui';
import theme from 'muse-ui/lib/theme';
// import * as colors from 'muse-ui/lib/theme/colors';
import App from './App';
import router from './router';


Vue.config.productionTip = false;

/* theme defined */
theme.add('custom', {
  primary: '#4A90E2',
}, 'light');

//  apply
Vue.use(MuseUI);
theme.use('custom');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
