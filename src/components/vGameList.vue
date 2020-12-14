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
      <a class="showmore w100" v-if="isMobile" @click="showMore = !showMore">
        <span class="flex align-center" v-if="showMore">
          SHOW LESS
          <font-awesome-icon icon="sort-up" />
        </span>
        <span class="flex align-center" v-else>
          SHOW MORE
          <font-awesome-icon icon="sort-down" />
        </span>
      </a>
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
  data() {
    return {
      isMobile: false,
      showMore: true,
    };
  },
  components: { vGamePreview },
  created() {
    this.isMobile = window.innerWidth <= 580 ? true : false;
    this.showMore = window.innerWidth <= 580 ? false : true;
  },
  computed: {
    gameArray() {
      const games = [
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
      return games.slice(this.showMore ? 0 : -2);
    },
  },
};
</script>

