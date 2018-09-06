<template lang="pug">
  div.tiles(v-loading="loading")
    div.tiles__item(v-if="have_tiles", v-for="(tile) in tiles", :class="tile.type")
      router-link(
        :to="{ name: 'Tile', params: { id: tile.id } }",
        tag="div",
        :style="{ backgroundImage: 'url(' + tile.image +')'}"
      ).tiles__item_inner
        div.tiles__inner_title
          span {{ tile.title }}
        div.tiles__inner_descr
          span {{ tile.description }}
    div.tiles__empty(v-else) К сожалению ничего не найдено!
</template>

<script>
export default {
  name: 'Grid',
  computed: {
    loading() {
      return this.$store.state.loading.get_tiles;
    },
    tiles() {
      return this.$store.state.tiles;
    },
    have_tiles() {
      return this.tiles.length !== 0;
    },
  },
  mounted() {
    this.$store.dispatch('get_tiles');
  },
};
</script>

<style>
.tiles{
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.tiles__item_inner{
  border: 1px solid #e6e6e6;
  height: 190px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.tiles__item.normal{
  flex: 0 0 33.333333%;
}
.tiles__item.double{
  flex: 0 0 66.666666%;
}
.tiles__inner_descr span,
.tiles__inner_title span{
  display: inline-block;
  color: #000;
  margin: 15px 15px 0 15px;
  padding: 5px 10px 4px;
  background: rgba(255, 255, 255, 0.72);
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
}
.tiles__inner_descr span{
  font-weight: normal;
  margin-top: 10px;
}
.tiles__empty{
  text-align: center;
  width: 100%;
  font-weight: bold;
}
@media all and (max-width: 1024px) {
  .tiles__item.normal{
    flex: 0 0 50%;
  }
  .tiles__item.double{
    flex: 0 0 100%;
  }
}
@media all and (max-width: 480px) {
  .tiles__item.normal,
  .tiles__item.double{
    flex: 0 0 100%;
  }
}
</style>
