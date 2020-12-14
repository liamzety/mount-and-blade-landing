<template>
  <section class="game-list">
    <div class="game-list-container container">
      <h2 class="category">OTHER GAMES</h2>
      <div class="games flex space-between w100 align-center wrap">
        <v-game-preview
          v-for="(src, idx) in srcArray"
          :key="idx"
          v-bind:style="{
            backgroundImage: 'url(' + src + ')',
          }"
        />
      </div>
    </div>
  </section>
</template>

<script>
import src1 from "@/assets/img/games-img/mnb.jpg";
import src2 from "@/assets/img/games-img/mnb-warband.jpg";
import src3 from "@/assets/img/games-img/mnb-with-fire-and-sword.jpg";
import src4 from "@/assets/img/games-img/mnb-viking-conquest.jpg";
import src5 from "@/assets/img/games-img/mnb-napoleonic-wars.jpg";
import src6 from "@/assets/img/games-img/mnb-bannerlord.jpg";
import vGamePreview from "@/components/vGamePreview.vue";

export default {
  components: { vGamePreview },

  computed: {
    srcArray() {
      return [src1, src2, src3, src4, src5, src6];
    },
  },
};
</script>

