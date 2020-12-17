<template>
  <div class="patch-list">
    <div class="patch-list-container relative">
      <div class="patch-list-card-list container">
        <h2 class="category">NEWS</h2>
        <div v-for="(patch, idx) in patchArray" :key="idx" class="card">
          <img class="w100" :src="patch.src" alt="" />
          <div class="txt-container flex space-between col">
            <h3 v-html="patch.title"></h3>
            <div class="patch-body-preview">
              <long-txt :txt="patch.body" />
            </div>
            <button>
              <a :href="`https://www.taleworlds.com/en/News/41${8 - idx}`"
                >READ MORE</a
              >
            </button>
          </div>
        </div>
        <a class="showmore" v-if="isMobile" @click="showMore = !showMore">
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
    </div>
  </div>
</template>

<script>
import { bannerLordService } from "@/services/bannerlord.js";
import LongTxt from "@/components/LongTxt.vue";
export default {
  data() {
    return {
      isMobile: false,
      showMore: true,
    };
  },
  components: {
    LongTxt,
  },
  created() {
    this.isMobile = window.innerWidth <= 580 ? true : false;
    this.showMore = window.innerWidth <= 580 ? false : true;
  },
  computed: {
    patchArray() {
      return bannerLordService.getPatchNotes().slice(this.showMore ? 0 : -2);
    },
  },
};
</script>

<style>
</style>