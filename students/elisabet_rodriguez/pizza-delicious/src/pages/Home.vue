<template>
  <div>
    <Showcase/>
    <Address/>
    <HotPizzaMeals/>
    <OurServices/>
    <RecentBlog/>
  </div>
</template>

<script>
import Showcase from '@/components/Showcase'
import Address from '@/components/Address'
import OurServices from '@/components/OurServices'
import RecentBlog from '@/components/RecentBlog'
import HotPizzaMeals from '@/components/HotPizzaMeals'
/* import MenuPricing from '@/components/MenuPricing' */


export default {
  name: 'Home',
  components: {
    Showcase,
    Address,
    OurServices,
    RecentBlog,
    HotPizzaMeals,
  }
}
</script>