<template>
  <Header />
    <router-view class="m-10"/>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header'
export default {
  components: {
    Header,
    Footer

  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
* {
font-family: 'Open Sans', sans-serif;
}
</style>
