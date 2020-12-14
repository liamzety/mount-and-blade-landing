<template>
  <section id="game-list" class="game-list">
    <div class="game-list-container container">
      <h2 class="category">OTHER GAMES</h2>
      <div class="games flex space-between w100 align-center wrap">
        <v-game-preview
          v-for="(game, idx) in gameArray"
          :key="idx"
          v-bind:style="{
            backgroundImage: 'url(' + game.img + ')',
          }"
          :_ref="game.ref"
        />
      </div>
    </div>
  </section>
</template>

<script>
import src1 from "@/assets/img/games-img/mnb.jpg";
import src2 from "@/assets/img/games-img/mnb-warband.jpg";
import src3 from "@/assets/img/games-img/mnb-with-fire-and-sword.jpg";
import src4 from "@/assets/img/games-img/mnb-napoleonic-wars.jpg";
import src5 from "@/assets/img/games-img/mnb-viking-conquest.jpg";
import src6 from "@/assets/img/games-img/mnb-bannerlord.jpg";
import vGamePreview from "@/components/vGamePreview.vue";

export default {
  components: { vGamePreview },

  computed: {
    gameArray() {
      return [
        { img: src1, ref: "https://www.taleworlds.com/en/Games/MountAndBlade" },
        { img: src2, ref: "https://www.taleworlds.com/en/Games/Warband" },
        { img: src3, ref: "https://www.taleworlds.com/en/Games/FireAndSword" },
        {
          img: src4,
          ref: "https://www.taleworlds.com/en/Games/NapoleonicWars",
        },
        {
          img: src5,
          ref: "https://www.taleworlds.com/en/Games/VikingConquest",
        },
        { img: src6, ref: "https://www.taleworlds.com/en/Games/Bannerlord" },
      ];
    },
  },
};
</script>

