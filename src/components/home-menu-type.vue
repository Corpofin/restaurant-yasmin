<template>
<div>
  <h3 class="text-center text-grey">{{ title }}</h3>

  <div class="wrapper">
    <q-list v-if="item.type == name" v-for="(item, index) in menu" v-bind:key="index">
      <q-item>
        <q-item-main>
          <q-item-tile label>{{ item.title }}</q-item-tile>

          <q-item-tile sublabel>{{ item.description }}</q-item-tile>
        </q-item-main>

        <q-item-side class="text-primary" right>
          ${{ item.price || 15 }}
        </q-item-side>
      </q-item>
    </q-list>
  </div>
</div>
</template>

<script>
import { QList, QItem, QItemMain, QItemTile, QItemSide } from 'quasar'

export default {
  components: {
    QList,
    QItem,
    QItemMain,
    QItemTile,
    QItemSide
  },
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    menu() {
      return this.$store.getters.menu
    }
  },
  async created() {
    this.$store.dispatch('getMenu')
  }
}
</script>

<style lang="stylus" scoped>
h3 {
  font-size: 1.25rem;
  margin-top: 2rem;
}

.wrapper {
  margin: 0 auto;
  max-width: 768px;

  @media (min-width: 576px) {
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
}

.q-list {
  border: 0;
  margin: 0;
}

.q-item-side {
  font-family: 'Pacifico', cursive;
}
</style>
