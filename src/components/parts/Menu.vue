<template lang="pug">
  div
    el-menu.el-menu-demo(:default-active="active_index", mode='horizontal', :router="true")
      el-menu-item(
        v-for="(menu) in menu_items",
        :index="menu.index",
        :key="menu.index",
        :route="{ name: menu.name }"
        ) {{ menu.text }}
</template>

<script>
import _ from 'lodash';

export default {
  name: 'Menu',
  computed: {
    menu_items() {
      return this.$store.state.menu_items;
    },
    active_index() {
      const current = _.find(this.menu_items, menu => menu.name === this.$route.name);
      return current ? current.index : '1';
    },
  },
};
</script>

<style>

</style>
