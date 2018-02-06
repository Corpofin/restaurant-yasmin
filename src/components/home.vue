<template>
<div class="layout-padding">
  <home-header />
  <home-about />
  <home-specialities />
  <home-special />
  <home-filler />
  <home-menu />
</div>
</template>

<script>
import HomeAbout from './home-about.vue'
import HomeFiller from './home-filler.vue'
import HomeMenu from './home-menu.vue'
import HomeHeader from './home-header.vue'
import HomeSpecial from './home-special.vue'
import HomeSpecialities from './home-specialities.vue'

export default {
  components: {
    HomeAbout,
    HomeFiller,
    HomeMenu,
    HomeHeader,
    HomeSpecial,
    HomeSpecialities
  }
}
</script>