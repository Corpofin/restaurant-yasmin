export default {
  async getMenu({ commit, state }) {
    try {
      let response = await fetch('/statics/menu.json')

      if (response.ok) {
        let jsonResponse = await response.json()

        commit('menu', jsonResponse)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
