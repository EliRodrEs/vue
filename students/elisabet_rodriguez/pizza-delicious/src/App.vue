<template>
  <div id="app">
    <MainNav :menu="menu"/>
    
    <router-view></router-view>
    
    <Footer/>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Pedidos from '@/pages/Pedidos'




export default {
  name: 'App',
  data(){
    return {
      menu: [
        {id: 1, path: "/", name:"Home"},
        {id: 2, path: "/orders", name:"Orders"},
        {id: 3, path: "/blog", name:"Blog"},
        {id: 4, path: "/contact", name:"Contact"}
      ]
    }
  },
  components: {
    MainNav,
    Footer,
    Home,
    Pedidos
  }
}
</script>




