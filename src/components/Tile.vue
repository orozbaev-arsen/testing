<template lang="pug">
  div.tile
    div.tile__current(v-if="current_tile")
      div.tile__header
        router-link(:to="{ name: 'Grid' }", tag="div")
          el-button.tile__header_back(type="success", size="small") Назад
        div.tile__heade_title {{ current_tile.title }}
      div.tile__text {{ current_tile.text }}
    div.tile__empty(v-else)
      div.tile__header
        router-link(:to="{ name: 'Grid' }", tag="div")
          el-button.tile__header_back(type="success", size="small") Назад
        div.tile__heade_title 404 ошибка
</template>

<script>
import _ from 'lodash';

export default {
  name: 'Tile',
  computed: {
    tile_id() {
      return parseInt(this.$route.params.id, 10);
    },
    tiles() {
      return this.$store.state.tiles;
    },
    current_tile() {
      return this.tiles.length > 0 ? _.find(this.tiles, tile => tile.id === this.tile_id) : {};
    },
  },
  mounted() {
    if (this.tiles.length === 0) {
      this.$store.dispatch('get_tiles'); // TODO: request by id
    }
  },
};
</script>

<style scoped>
.tile__header {
  display: flex;
}
.tile__header_back {
  flex: 0 0 50px;
  cursor: pointer;
  height: 30px;
}
.tile__heade_title {
  flex: 1;
  text-align: center;
  font-size: 20px;
  padding-bottom: 20px;
}
.tile {
  margin: 0 auto;
  max-width: 1400px;
}
</style>
