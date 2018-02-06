<template>
<section class="bg-light text-primary" id="reservation-about">
  <div class="wrapper">
    <div class="bg-white layout-padding">
      <h2>Reservations</h2>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

      <q-btn v-on:click="$router.push('reservation')" small color="primary">BOOK A TABLE</q-btn>
    </div>

    <div class="empty"></div>
    <div class="empty"></div>

    <div class="bg-white layout-padding">
      <h2>About</h2>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore delectus rem explicabo, id voluptas amet architecto incidunt minus dolor consequatur odio quaerat nesciunt obcaecati non. Fugiat molestias officia ad?</p>
    </div>

    <div class="bg-white layout-padding">
      <h2>Hours</h2>

      <ul>
        <li>Lunch 11am - 2pm</li>
        <li>Dinner 5pm - 8pm</li>
      </ul>

      <small>Open everyday except holidays</small>
    </div>

    <div class="empty"></div>
    <div class="empty"></div>

    <div class="bg-white layout-padding">
      <h2>Contact</h2>

      <ul>
        <li>1 Bhayangkara St. Samarinda, ID</li>
        <li>Phone:
          <a href="tel:1234567">(0541) 123-4567</a>
        </li>
        <li>Email:
          <a href="mailto:hi@yasmin.com">hi@yasmin.com</a>
        </li>
      </ul>

      <gmap-map v-bind:center="center" v-bind:zoom="7" style="height: 225px; max-width: 400px; width: 100%;">
        <gmap-marker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true" />
      </gmap-map>
    </div>
  </div>
</section>
</template>

<script>
import { openURL, QBtn } from 'quasar'

export default {
  components: {
    QBtn
  },
  data() {
    return {
      center: { lat: -0.494823, lng: 117.143615 },
      markers: [
        {
          position: { lat: -0.494823, lng: 117.143615 }
        }
      ]
    }
  },
  methods: {
    launch(url) {
      openURL(url)
    }
  }
}
</script>

<style lang="stylus" scoped>
section {
  display: flex;
  justify-content: center;
  min-height: 300px;
  text-align: center;

  @media (min-width: 1200px) {
    min-height: calc(1254px - 4rem);
    position: relative;
  }
}

.wrapper {
  background-color: #795548;
  display: grid;
  grid-row-gap: 1rem;
  margin: 0 auto;
  max-width: 768px;

  @media (min-width: 576px) {
    background: url('/statics/interior.jpg') no-repeat center center;
    background-size: cover;
    grid-row-gap: 0;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
  }

  @media (min-width: 1200px) {
    position: absolute;
    top: -2rem;
  }
}

.empty {
  display: none;

  @media (min-width: 576px) {
    display: block;
  }
}

div {
  width: 100%;
}

h2 {
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li:not(:last-child) {
  margin-bottom: 0.5rem;
}

.vue-map-container {
  margin: 0 auto;
}
</style>
