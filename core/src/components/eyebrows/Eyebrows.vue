<script setup lang="ts">
import { computed, defineProps } from "vue"
import LeftLoweredEyebrows from "./LeftLoweredEyebrows.vue";
import SeriousEyebrows from "./SeriousEyebrows.vue";
import Normal from "./Normal.vue";
import ConcernedEyebrows from "./ConcernedEyebrows.vue";
import AngryEyebrows from "./AngryEyebrows.vue";

export type EyebrowsType = 'none' | "normal" | "serious" | "left-lowered" | 'angry' | 'concerned';

const props = defineProps<{
  type: EyebrowsType
}>()

const eyebrowsComponent = computed(() => {
  return {
    'none': null,
    'normal': Normal,
    'serious': SeriousEyebrows,
    'left-lowered': LeftLoweredEyebrows,
    'angry': AngryEyebrows,
    'concerned': ConcernedEyebrows,
  }[props.type]
})
</script>

<template>
  <component :is="eyebrowsComponent"/>
</template>
