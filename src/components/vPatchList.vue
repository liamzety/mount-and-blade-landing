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
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bannerLordService } from "@/services/bannerlord.js";
import LongTxt from "@/components/LongTxt.vue";
export default {
  components: {
    LongTxt,
  },
  computed: {
    patchArray() {
      return bannerLordService.getPatchNotes();
    },
  },
};
</script>

<style>
</style>