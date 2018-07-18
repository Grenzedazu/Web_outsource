import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages/Main';
import Login from '@/pages/login/login';
import Profile from '@/pages/profile/Profile';
import Mall from '@/pages/mall/Mall';
import MallCart from '@/pages/mall/children/MallCart';
import MallDetail from '@/pages/mall/children/MallDetail'
import Express from '@/pages/schenk/Schenk';
import Delivery from '@/pages/delivery/Delivery';
import DeliveryInfo from '@/pages/delivery/children/DeliveryInfo';
import DeliveryDetails from '@/pages/delivery/children/DeliveryDetails';
import DeliveryHistory from '@/pages/delivery/children/deliveryHistory';
import address from '@/components/address';
import payment from '@/components/payment';
import App from '../App';

/* eslint-disable */
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: '/home',
        component: Main,
      },
      {
        path: '/profile',
        component: Profile,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: '/mall',
        component: Mall,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: '/mallcart',
        component: MallCart,        
      },
      {
        path :'/malldetail',
        component: MallDetail,
      },
      {
        path: '/schenk',
        component: Express,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: '/delivery',
        component: Delivery,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: '/deliveryinfo',
        component: DeliveryInfo,
      },
      {
        path: '/deliverydetails',
        component: DeliveryDetails,
      },
      {
        path: '/deliveryhistory',
        component: DeliveryHistory,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/payment',
        component: payment,
      },
      {
        path: '/address',
        component: address,
      },
    ],
  },
],
});
