import Vue from 'vue';
import Router from 'vue-router';
import Grid from '@/components/Grid';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Tile from '@/components/Tile';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Grid',
      component: Grid,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
    },
    {
      path: '/tile/:id',
      name: 'Tile',
      component: Tile,
    },
  ],
});
