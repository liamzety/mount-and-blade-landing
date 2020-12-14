<template>
  <section id="#about" class="about relative">
    <div class="top-shadow absolute w100"></div>
    <div class="container">
      <h2 class="category">ABOUT</h2>
      <div class="desc">
        <p>
          The horns sound, the ravens gather. An empire is torn by civil war.
          Beyond its borders, new kingdoms rise. Gird on your sword, don your
          armour, summon your followers and ride forth to win glory on the
          battlefields of Calradia. Establish your hegemony and create a new
          world out of the ashes of the old. Mount & Blade II: Bannerlord is the
          eagerly awaited sequel to the acclaimed medieval combat simulator and
          role-playing game Mount & Blade: Warband. Set 200 years before, it
          expands both the detailed fighting system and the world of Calradia.
          Bombard mountain fastnesses with siege engines, establish secret
          criminal empires in the back alleys of cities, or charge into the
          thick of chaotic battles in your quest for power.
        </p>

        <p>
          An all-new tailor-made game engine, developed in-house to fulfill the
          unique needs of the series, offers the perfect balance of performance
          and graphical fidelity, scalable with the power of your hardware.
          Experience Mount & Blade with richer, more beautiful graphics than
          ever, immersing you in the world of Calradia, rendering the game's
          magnificent battles with equally spectacular detail.
        </p>
      </div>
      <div class="demo w100 h100 relative">
        <video class="w100" autoplay muted loop :src="vid"></video>
        <div class="ratings flex align-center h100 absolute">
          <div class="rating-title-container flex space-evenly col h100">
            <h3
              class="rating-title flex justify-center align-center"
              v-for="(rating, idx) in ratings"
              :key="idx"
            >
              {{ rating.title }}
            </h3>
          </div>
          <div class="rating-bar-container flex col space-evenly h100 w100">
            <div
              v-for="(rating, idx) in ratings"
              :key="idx"
              :style="computeLength(rating.percent)"
              class="rating-bar flex justify-center align-center"
            >
              {{ rating.percent.toFixed() }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { bannerLordService } from "@/services/bannerlord.js";
export default {
  data() {
    return {
      video: "",
      ratings: null,
    };
  },
  async created() {
    const { clip, ratings } = await bannerLordService.query();
    this.ratings = ratings;
    this.video = clip.clip;
  },
  computed: {
    vid() {
      return this.video;
    },
  },
  methods: {
    computeLength(percent) {
      return `width: ${percent * 1.5}%`;
    },
  },
};
</script>

<style>
</style>