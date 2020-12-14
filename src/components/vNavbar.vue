<template>
  <nav class="nav">
    <div class="nav-container h100 container flex align-center space-between">
      <img class="logo" :src="logo" alt="" />
      <div>
        <a href="#game-list" v-smooth-scroll>GAMES</a>
        <a href="#about" v-smooth-scroll>ABOUT</a>
        <a href="https://www.taleworlds.com/en/Store">STORE</a>
        <a href="https://www.taleworlds.com/en/Company">COMPANY</a>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "@/assets/img/logo.png";

export default {
  computed: {
    logo() {
      return logo;
    },
  },
};
</script>
