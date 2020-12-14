<template>
  <div class="home">
    <v-navbar />
    <v-hero />
    <v-main />
    <v-about />
    <v-footer />
  </div>
</template>

<script>
import vNavbar from "@/components/vNavbar.vue";
import vHero from "@/components/vHero.vue";
import vMain from "@/components/vMain.vue";
import vAbout from "@/components/vAbout.vue";
import vFooter from "@/components/vFooter.vue";

export default {
  components: {
    vNavbar,
    vHero,
    vMain,
    vAbout,
    vFooter,
  },
};
</script>
