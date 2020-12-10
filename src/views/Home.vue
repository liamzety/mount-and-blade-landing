<template>
  <div class="home">
    <v-navbar />
    <v-hero />
    <v-main />
  </div>
</template>

<script>
import vNavbar from "@/components/vNavbar.vue";
import vHero from "@/components/vHero.vue";
import vMain from "@/components/vMain.vue";

export default {
  components: {
    vNavbar,
    vHero,
    vMain,
  },
};
</script>
