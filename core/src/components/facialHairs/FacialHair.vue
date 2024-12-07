<script setup lang="ts">
import { computed } from "vue";
import Stubble from "./Stubble.vue";
import MediumBeard from "./MediumBeard.vue";
import type { colors } from "@/constants/theme";

export type FacialHairType = 'none' | 'stubble' | 'medium-beard'

const props = defineProps<{
  type: FacialHairType,
  color: keyof typeof colors.hair,
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
  <component 
    v-if="facialHairComponent !== null"
    :is="facialHairComponent" 
    :color="color" 
  />
</template>
