
<script setup lang="ts">
import type { colors } from '@/constants/theme';
import Beanie from './Beanie.vue';
import Turban from './Turban.vue';
import { computed } from 'vue';
import type { HairType } from '../hairs/Hair.vue';

export type HatType = 'none' | 'beanie' | 'turban';

const props = defineProps<{
  position: 'front' | 'back',
  type: HatType,
  color: keyof typeof colors.clothing,
  hairType: HairType
}>()

const hatComponent = computed(() => ({
  'none': null,
  'beanie': Beanie,
  'turban': Turban,
}[props.type]))

const hatScale = computed(() => {
  return {
    'bob': 1.12,
    'afro': 0,
    'balding': 0.9,
    'none': 1,
    'bun': 1,
    'buzz': 1,
    'long': 1.12,
    'pixie': 1,
    'short': 1,
  }[props.hairType]
})
</script>

<template>
  <component
    :is="hatComponent"
    :position="position"
    :color="color"
    :scale="hatScale"
  />
</template>
