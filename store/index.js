export const state = () => ({
  mapBounds: {},
});
export const mutations = {
  refreshBounds(state, newMapBounds) {
    state.mapBounds = newMapBounds;
  },
};
