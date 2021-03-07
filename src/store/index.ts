import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      buttonPermission: {
        add: true,
        edit: false,
        delete: true,
      }
    }
  }
})

export default store