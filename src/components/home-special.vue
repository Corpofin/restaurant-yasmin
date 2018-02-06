<template>
<section class="bg-light text-primary">
  <div class="wrapper">
    <div class="item" v-for="(item, index) in specialMenu" v-bind:key="index">
      <img class="responsive" v-bind:src="getImg(item.title)" v-bind:alt="item.title">

      <div class="text bg-white flex column justify-center items-center">
        <h3>{{ item.title }}</h3>

        <p>{{ item.description }}</p>
      </div>
    </div>

  </div>
</section>
</template>

<script>
export default {
  computed: {
    specialMenu() {
      return this.$store.getters.specialMenu
    }
  },
  async created() {
    this.$store.dispatch('getMenu')
  },
  methods: {
    getImg(input) {
      return `/statics/${input
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/\./g, '')}.jpg`
    }
  }
}
</script>

<style lang="stylus" scoped>
section {
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;

  @media (min-width: 1200px) {
    min-height: calc(384px - 4rem);
    position: relative;
  }
}

.wrapper {
  display: grid;
  grid-gap: 2rem;
  max-width: 768px;
  padding: 2rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media (min-width: 992px) {
    grid-gap: 0;
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
  }

  @media (min-width: 1200px) {
    position: absolute;
    top: -2rem;
  }
}

h3 {
  font-size: 1.5rem;
}

.item {
  display: grid;
  grid-template-rows: 1fr auto;

  @media (min-width: 992px) {
    grid-template-rows: 1fr 1fr;
  }
}

.text {
  padding: 1rem;
}

.item:nth-of-type(odd) img {
  @media (min-width: 992px) {
    order: 1;
  }
}

p {
  margin-bottom: 0;
}
</style>
