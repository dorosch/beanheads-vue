<script setup lang="ts">
import type { colors } from '@/constants/theme';
import { computed } from 'vue';

import Grin from './Grin.vue';
import OpenMouth from './OpenMouth.vue';
import Sad from './Sad.vue';
import SeriousMouth from './SeriousMouth.vue';
import Tongue from './Tongue.vue';
import Lips from './Lips.vue';

const props = defineProps<{
  color: keyof typeof colors.lipColors,
  mouth: 'grin' | 'lips' | 'sad' | 'serious' | 'open' | 'tongue',
}>()


const mouthComponent = computed(() => {
  return {
    grin: Grin,
    lips: Lips,
    sad: Sad,
    serious: SeriousMouth,
    open: OpenMouth,
    tongue: Tongue,
  }[props.mouth];
})

</script>

<template>
  <component :is="mouthComponent" :color="color"/>
</template>