<script setup lang="ts">
import { computed } from 'vue';
import RoundGlasses from './RoundGlasses.vue';
import TinyGlasses from './TinyGlasses.vue';
import Shades from './Shades.vue';

const props = defineProps<{
  accessory: 'none'|'round-glasses' | 'tiny-glasses' | 'shades';
}>();

const accessoryComponent = computed(() => {
  return {
    'round-glasses': RoundGlasses,
    'tiny-glasses': TinyGlasses,
    'shades': Shades,
    'none': null,
  }[props.accessory];
});
</script>

<template>
  <component 
    v-if="accessoryComponent"
    :is="accessoryComponent"
  />
</template>
