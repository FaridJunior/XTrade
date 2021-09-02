export const state = () => ({
  hiddenCols: process.server ? '' : JSON.parse(localStorage.getItem('hiddenCols') || '[]'),
})

export const mutations = {
  updateHiddenCols(state, cols) {
    state.hiddenCols = cols
  },
}

export const actions = {
  updateHiddenCols({ commit }, cols) {
    localStorage.setItem('hiddenCols', cols)
    commit('hiddenCols', cols)
  },
}
