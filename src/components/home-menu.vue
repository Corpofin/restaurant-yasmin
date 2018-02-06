<template>
<section class="bg-white layout-padding text-primary">
  <h2 class="text-center">Menu</h2>

  <a-menu-type name="dinner" title="FOOD &amp; APERITIVES"></a-menu-type>
  <a-menu-type name="dessert" title="DESSERTS"></a-menu-type>
</section>
</template>

<script>
import { QItem, QItemMain, QItemSide, QItemTile, QList } from 'quasar'
import HomeMenuType from './home-menu-type'

export default {
  components: {
    HomeMenuType,
    QItem,
    QItemMain,
    QItemSide,
    QItemTile,
    QList
  }
}
</script>

<style lang="stylus" scoped>
section {
  min-height: 100vh;

  @media (min-width: 576px) {
    background-position: center 750px;
  }

  @media (min-width: 1200px) {
    background-position: -850px center;
  }
}

h2 {
  font-family: 'Pacifico', cursive;
}
</style>
