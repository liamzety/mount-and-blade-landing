<template>
  <div class="home">
    <v-navbar />
    <v-hero />
    <v-game-list />
  </div>
</template>

<script>
import vNavbar from "@/components/vNavbar.vue";
import vHero from "@/components/vHero.vue";
import vGameList from "@/components/vGameList.vue";

export default {
  components: {
    vNavbar,
    vHero,
    vGameList,
  },
};
</script>
