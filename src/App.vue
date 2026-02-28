<script setup>
import FooterSection from './components/FooterSection.vue';
import HelloWorld from './components/HelloWorld.vue'
import HeroSection from './components/HeroSection.vue';
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <div>
    <Navbar />
   `<router-view />`
   <FooterSection />

  </div>
</template>



<!-- <style>
h1 {
  color: blue;
}
</style> -->