import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'

const app = createApp(App)
app.directive('has', {
  mounted(el, binding) {
    if(!store.state.buttonPermission[binding.value]) {
      console.log('权限', el.parentNode)
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
})


app.use(store).mount('#app')
