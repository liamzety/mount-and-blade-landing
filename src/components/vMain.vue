<template>
  <section class="main">
    <div class="top-shadow"></div>
    <v-patch-list />
    <v-game-list />
  </section>
</template>

<script>
import vPatchList from "@/components/vPatchList.vue";
import vGameList from "@/components/vGameList.vue";
export default {
  components: { vGameList, vPatchList },
};
</script>
