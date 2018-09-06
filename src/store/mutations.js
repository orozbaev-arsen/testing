import _ from 'lodash';

const mutations = {};

mutations.loading = (state, data) => {
  _.each(data, (value, key) => {
    state.loading[key] = value;
  });
};

mutations.set_tiles = (state, payload) => {
  state.tiles = payload;
};

mutations.set_error = (state, error) => {
  state.error = error;
};

export default mutations;
