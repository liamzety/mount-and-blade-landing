<template>
  <nav class="nav">
    <div class="nav-container h100 container flex align-center space-between">
      <img class="logo" :src="logo" alt="" />
      <div>
        <a href="">GAMES</a>
        <a href="">STORE</a>
        <a href="">COMPANY</a>
        <a href="">NEWS</a>
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
