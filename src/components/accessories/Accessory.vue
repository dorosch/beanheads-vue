<script setup lang="ts">
import { computed } from 'vue';
import RoundGlasses from './RoundGlasses.vue';
import TinyGlasses from './TinyGlasses.vue';
import Shades from './Shades.vue';

export type AccessoryType = 'round-glasses' | 'tiny-glasses' | 'shades';

const props = defineProps<{
  type: AccessoryType;
}>();

const accessoryComponent = computed(() => {
  return {
    'round-glasses': RoundGlasses,
    'tiny-glasses': TinyGlasses,
    'shades': Shades,
  }[props.type];
});
</script>

<template>
  <component :is="accessoryComponent"/>
</template>
