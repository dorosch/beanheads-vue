
<script setup lang="ts">
import type { colors } from '@/constants/theme';
import Beanie from './Beanie.vue';
import Turban from './Turban.vue';
import { computed } from 'vue';

const props = defineProps<{
  hat: 'none' | 'beanie' | 'turban',
  color: keyof typeof colors.clothing,
  position: 'front' | 'back',
  scale: number,
}>()

const hatComponent = computed(() => ({
  beanie: Beanie,
  turban: Turban,
  none: null,
}[props.hat]))
</script>

<template>
  <component
    v-if="hatComponent"
    :is="hatComponent"
    :position="position"
    :color="color"
    :scale="scale"
  />
</template>
