// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import theme from 'muse-ui/lib/theme';
import FastClick from 'fastclick';
// import * as colors from 'muse-ui/lib/theme/colors';
import App from './App';
import router from './router';

/* eslint-disable */
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
Vue.use(MuseUI);
Vue.config.productionTip = false;

/* theme defined */
// theme.add('custom', {
//   primary: '#4A90E2',
// }, 'light');

//  apply

// theme.use('custom');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
  } else {
    if (from.meta.keepAlive) {
      from.meta.savedPosition = document.body.scrollTop;
    }
      return { x: 0, y: to.meta.savedPosition || 0 }
  }
}
});
