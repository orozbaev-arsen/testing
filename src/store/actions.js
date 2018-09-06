import axios from 'axios';

const actions = {};

actions.get_tiles = ({ state, commit }) => {
  commit('loading', { get_tiles: true });
  commit('set_error', null);
  axios.get(state.json_url)
    .then((resp) => {
      if (resp.data.success && resp.status === 200) {
        commit('set_tiles', resp.data.tiles);
        commit('loading', { get_tiles: false });
      } else {
        commit('set_error', 'Произошла ошибка загрузки tiles');
      }
    })
    .catch((error) => {
      commit('loading', { get_tiles: false });
      commit('set_error', `Произошла ошибка загрузки tiles: ${error}`);
    });
};

export default actions;
