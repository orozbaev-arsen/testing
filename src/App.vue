<template lang="pug">
  el-container(id="app")
    el-header
      Menu
    el-main
      router-view

</template>

<script>
import Menu from './components/parts/Menu';

export default {
  components: {
    Menu,
  },
  name: 'App',
  computed: {
    error() {
      return this.$store.state.error;
    },
  },
  watch: {
    error(newValue) {
      if (newValue) {
        this.$notify.error({
          title: 'Ошибка',
          message: newValue,
        });
      }
    },
  },
};
</script>

<style>
html, body{
  padding: 0;
  margin: 0;
}
body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 320px;
}
.container{
  max-width: 1400px;
  margin: 0 auto;
}
</style>
