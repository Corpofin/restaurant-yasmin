<template>
<section class="flex justify-center items-center text-center">
  <h2>OUR SPECIALITIES</h2>
</section>
</template>

<script>
export default {
  name: 'ASpecialities'
}
</script>

<style lang="stylus" scoped>
section {
  background: url(/statics/ingredients.jpg) no-repeat center center;
  background-size: cover;
  font-weight: bold;
  height: 100%;
  min-height: 75vh;
}

h2 {
  font-size: 2rem;
  font-weight: bolder;
  letter-spacing: 0.5rem;

  @media (min-width: 576px) {
    font-size: 2.5rem;
  }
}
</style>
