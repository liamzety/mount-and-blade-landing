<template>
  <nav class="nav fixed w100" :class="isTop ? '' : 'opacify'">
    <div class="nav-container h100 container flex align-center space-between">
      <img class="logo" :src="logo" alt="" />
      <div v-if="isMobile">
        <a href="#game-list" v-smooth-scroll>GAMES</a>
        <a href="#about" v-smooth-scroll>ABOUT</a>
        <a href="https://www.taleworlds.com/en/Store">STORE</a>
        <a href="https://www.taleworlds.com/en/Company">COMPANY</a>
      </div>
      <div v-else>
        <div>
          <img :src="bars" alt="" />
        </div>
        <font-awesome-icon @click="toggleMenu()" icon="fa-bars" />
        <div class="menu relative" v-if="menuOpen">
          <button class="absolute" @click="toggleMenu()">X</button>
          <a href="#game-list" v-smooth-scroll>GAMES</a>
          <a href="#about" v-smooth-scroll>ABOUT</a>
          <a href="https://www.taleworlds.com/en/Store">STORE</a>
          <a href="https://www.taleworlds.com/en/Company">COMPANY</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "@/assets/img/logo.png";
import bars from "@/assets/img/icons/bars.svg";

export default {
  data() {
    return {
      isMenu: false,
      isScrollTop: null,
    };
  },
  created() {
    if (window.scrollY === 0) this.isScrollTop = true;
    else this.isScrollTop = false;
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenu = !this.isMenu;
    },
    scrollIntoView() {
      const elApp = document.querySelector("#app");
      elApp.scrollIntoView({ block: "start", behavior: "smooth" });
    },
    handleScroll(ev) {
      if (ev.target.scrollingElement.scrollTop === 0) this.isScrollTop = true;
      else this.isScrollTop = false;
    },
  },
  computed: {
    logo() {
      return logo;
    },
    isMobile() {
      return window.innerWidth >= 650 ? true : false;
    },
    menuOpen() {
      return this.isMenu;
    },
    isTop() {
      return this.isScrollTop;
    },
    bars() {
      return bars;
    },
  },
};
</script>
