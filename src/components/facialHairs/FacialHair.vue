<script setup lang="ts">
import { computed } from "vue";
import Stubble from "./Stubble.vue";
import MediumBeard from "./MediumBeard.vue";
import type { colors } from "@/constants/theme";

const props = defineProps<{
  color: keyof typeof colors.hair,
  type: 'none' | 'stubble' | 'medium-beard'
}>()

const facialHairComponent = computed(() => {
  return {
    'none': null,
    'stubble': Stubble,
    'medium-beard': MediumBeard
  }[props.type]
})
</script>

<template>
  <component v-if="facialHairComponent" :is="facialHairComponent" :color="color" />
</template>