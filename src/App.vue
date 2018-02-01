<template>
  <!-- Don't drop "q-app" class -->
  <q-layout id="q-app" ref="layout" view="lHh LpR lff" reveal>
    <router-view class="text-white"/>

    <footer class="text-white text-center">
      &copy; 2018 - Developed by <a class="text-secondary" href="https://www.yasminzy.com">Yasmin ZY</a>
    </footer>
  </q-layout>
</template>

<script>
import { QLayout } from 'quasar'

export default {
  components: {
    QLayout
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Pacifico|Roboto');

[v-cloak] {
  display: none;
}

body {
  background-color: #795548;
  font-family: 'Roboto', sans-serif;

  @media (min-width: 768px) {
    background: url(statics/bg.jpg) no-repeat center center;
    background-size: cover;
  }
}

.layout-page-container {
  background-color: rgba(33, 33, 33, 0.75);
}

.layout-padding {
  max-width: 1200px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5em;
  margin-top: 0;
}

footer {
  padding: 0 1rem 1rem;

  @media (min-width: 992px) {
    padding-bottom: 1.5rem;
  }

  @media (min-width: 1200px) {
    padding-bottom: 3rem;
  }
}
</style>
