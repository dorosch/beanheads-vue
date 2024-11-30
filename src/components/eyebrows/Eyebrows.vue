<script setup lang="ts">
import { computed, defineProps } from "vue"
import LeftLoweredEyebrows from "./LeftLoweredEyebrows.vue";
import SeriousEyebrows from "./SeriousEyebrows.vue";
import Normal from "./Normal.vue";
import ConcernedEyebrows from "./ConcernedEyebrows.vue";
import AngryEyebrows from "./AngryEyebrows.vue";

const props = defineProps<{
  eyebrows: 'none' | "normal" | "serious" | "left-lowered" | 'angry' | 'concerned'
}>()

const eyebrowsComponent = computed(() => {
  return {
    normal: Normal,
    serious: SeriousEyebrows,
    "left-lowered": LeftLoweredEyebrows,
    angry: AngryEyebrows,
    concerned: ConcernedEyebrows,
    none: null
  }[props.eyebrows]
})
</script>

<template>
  <component 
    v-if="eyebrowsComponent"
    :is="eyebrowsComponent"
  />
</template>
