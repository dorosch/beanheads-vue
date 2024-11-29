<script setup lang="ts">
import { computed } from 'vue';
import ContentEyes from './ContentEyes.vue';
import DizzyEyes from './DizzyEyes.vue';
import HappyEyes from './HappyEyes.vue';
import HeartEyes from './HeartEyes.vue';
import LeftTwitchEyes from './LeftTwitchEyes.vue';
import NormalEyes from './NormalEyes.vue';
import SimpleEyes from './SimpleEyes.vue';
import SquintEyes from './SquintEyes.vue';
import Wink from './Wink.vue';
const props = withDefaults(defineProps<{
  eye?: 'content-eyes' | 'dizzy-eyes' | 'happy-eyes' | 'heart-eyes' | 'left-twitch-eyes' | 'normal-eyes' | 'simple-eyes' | 'squint-eyes' | 'wink',
  withLashes?: boolean,
}>(), {
  eye: 'content-eyes',
  withLashes: false,
})

const eyeComponent = computed(() => {
  return {
    'content-eyes': ContentEyes,
    'dizzy-eyes': DizzyEyes,
    'happy-eyes': HappyEyes,
    'heart-eyes': HeartEyes,
    'left-twitch-eyes': LeftTwitchEyes,
    'normal-eyes': NormalEyes,
    'simple-eyes': SimpleEyes,
    'squint-eyes': SquintEyes,
    'wink': Wink,
  }[props.eye];
});
</script>

<template>
  <component :is="eyeComponent" :with-lashes="withLashes" />
</template>