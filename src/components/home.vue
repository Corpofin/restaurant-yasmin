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
import HomeAbout from './home-about'
import HomeFiller from './home-filler'
import HomeMenu from './home-menu'
import HomeHeader from './home-header'
import HomeSpecial from './home-special'
import HomeSpecialities from './home-specialities'

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