<script setup lang="ts">
import type { colors } from '@/constants/theme';
import { computed } from 'vue';
import Afro from './Afro.vue';
import BaldingHair from './BaldingHair.vue';
import BobCut from './BobCut.vue';
import BunHair from './BunHair.vue';
import BuzzCut from './BuzzCut.vue';
import LongHair from './LongHair.vue';
import PixieCut from './PixieCut.vue';
import ShortHair from './ShortHair.vue';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{
  position: 'front' | 'back';
  hair: 'none' | 'afro' | 'balding' | 'bob' | 'bun' | 'buzz' | 'long' | 'pixie' | 'short';
  color: keyof typeof colors.hair;
  hasHat?: boolean;
}>(), {
  hasHat: false,
});

const hairComponent = computed(() => {
  return {
    'none': null,
    afro: Afro,
    balding: BaldingHair,
    bob: BobCut,
    bun: BunHair,
    buzz: BuzzCut,
    long: LongHair,
    pixie: PixieCut,
    short: ShortHair,
  }[props.hair];
})
</script>

<template>
  <component
    :is="hairComponent"
    :position="position"
    :color="color"
    :has-hat="hasHat"
  />
</template>
