<template>
<section>
  <div class="flex column justify-center items-center text-center">
    <h1>Yasmin's</h1>

    <p>BRITISH SPECIALITIES</p>
  </div>
</section>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
section {
  background: url(/statics/yasmins.jpg) no-repeat center center;
  background-size: cover;
  height: 100%;
  min-height: 100vh;
}

div {
  background-color: rgba(33, 33, 33, 0.5);
  height: 100%;
  min-height: 100vh;
}

h1 {
  font-family: 'Pacifico', cursive;
  font-size: 5rem;
  margin-bottom: 0.5em;

  @media (min-width: 576px) {
    font-size: 5rem;
  }

  @media (min-width: 768px) {
    font-size: 7.5rem;
  }
}

p {
  font-size: 2rem;
  font-weight: bolder;
  letter-spacing: 0.5rem;
  line-height: 2.5rem;

  @media (min-width: 576px) {
    font-size: 2.5rem;
  }
}
</style>
