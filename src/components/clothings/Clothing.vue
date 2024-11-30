<script setup lang="ts">
import { computed } from 'vue';
import type { colors } from '@/constants/theme';
import Dress from './Dress.vue';
import DressShirt from './DressShirt.vue';
import Shirt from './Shirt.vue';
import TankTop from './TankTop.vue';
import VNeck from './VNeck.vue';

const props = withDefaults(defineProps<{
  position?: 'front' | 'back',
  clothing?: 'none' | 'naked' | 'dress' | 'dress-shirt' | 'shirt' | 'tank-top' | 'v-neck',
  color?: keyof typeof colors.clothing,
}>(), {
  position: 'front',
  clothing: 'none',
  color: 'white',
})

const clothingComponent = computed(() => ({
  'dress': Dress,
  'dress-shirt': DressShirt,
  'shirt': Shirt,
  'tank-top': TankTop,
  'v-neck': VNeck,
  'none': null,
  'naked': null
}[props.clothing]))
</script>

<template>
  <component
    v-if="clothingComponent"
    :is="clothingComponent"
    :color="color"
    :position="position"
  >
    <template #graphic>
      <slot name="graphic"/>
    </template>
  </component>
</template>
