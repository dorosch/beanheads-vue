
<script setup lang="ts">
import type { colors } from '@/constants/theme';
import Breasts from './Breasts.vue';
import Chest from './Chest.vue';

const props = defineProps<{
  body: 'breasts' | 'chest',
  color: keyof typeof colors.clothing,
  position: 'front' | 'back',
  braStraps: boolean,
}>()
</script>

<template>
  <Breasts
    v-if="body === 'breasts'"
    :position="position"
    :color="color"
    :bra-straps="braStraps"
  />
  <Chest
    v-else-if="body === 'chest'"
    :position="position"
  />
</template>
