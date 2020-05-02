import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//En main.js se importan sólo las rutas, APARENTEMENTE
import Home from '@/pages/Home'
import Pedidos from '@/pages/Pedidos'
import Blog from '@/pages/Blog'
import Contacto from '@/pages/Contacto'
import NotFound from '@/pages/NotFound'
import User from '@/pages/User'
import UserProfile from '@/pages/User/UserProfile'
import UserPosts from '@/pages/User/UserPosts'

Vue.config.productionTip = false

const routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/Orders", name: "Pedidos", component: Pedidos},
  {path: "/Blog", name: "Blog", component: Blog},
  {path: "/Contact", name: "Contacto", component: Contacto},

  {path: "/User/:id", name: "User", component: User,
    children: [
      {path: "profile", component: UserProfile},
      {path: "posts", component: UserPosts}
    ]
  },

  {path: "*", name: "NotFound", component: NotFound}
]

const router = new VueRouter({
  //routes: routes (ES5)
  routes, mode: "history" //ES6
})

Vue.use(VueRouter)

new Vue({
  //router: router (ES5)
  router, //ES6
  render: h => h(App),
}).$mount('#app')
