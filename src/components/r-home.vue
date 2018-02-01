<template>
  <div class="layout-padding">
    <a-name />
    <a-about />
    <a-specialities />
    <a-special />
    <a-filler />
    <a-menu />
  </div>
</template>

<script>
import AAbout from './a-about.vue'
import AFiller from './a-filler.vue'
import AMenu from './a-menu.vue'
import AName from './a-name.vue'
import ASpecial from './a-special.vue'
import ASpecialities from './a-specialities.vue'

export default {
  name: 'RHome',
  components: {
    AAbout,
    AFiller,
    AMenu,
    AName,
    ASpecial,
    ASpecialities
  }
}
</script>