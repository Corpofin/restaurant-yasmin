export default {
  menu(state) {
    return state.menu
  },
  specialMenu(state) {
    return state.menu.filter(item => item.special)
  }
}
