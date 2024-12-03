
<script setup lang="ts">
import type { colors } from '@/constants/theme';
import Breasts from './Breasts.vue';
import Chest from './Chest.vue';
import { computed } from 'vue';

export type BodyType = 'chest' | 'breasts';

const props = withDefaults(defineProps<{
  type: BodyType,
  color: keyof typeof colors.clothing,
  position: 'front' | 'back',
  braStraps: boolean,
}>(), {
  type: 'chest',
  position: 'front',
  braStraps: false,
})

const bodyComponent = computed(() => {
  return {
    breasts: Breasts,
    chest: Chest,
  }[props.type]
})
</script>

<template>
  <component
    :is="bodyComponent"
    :position="position"
    :color="color"
    :bra-straps="braStraps"
  />
</template>
