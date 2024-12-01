<script setup lang="ts">
import { computed } from 'vue';
import type { colors } from '@/constants/theme';
import Dress from './Dress.vue';
import DressShirt from './DressShirt.vue';
import Shirt from './Shirt.vue';
import TankTop from './TankTop.vue';
import VNeck from './VNeck.vue';

export type ClothingType = 'none' | 'naked' |'dress' | 'dress-shirt' | 'shirt' | 'tank-top' | 'v-neck';

const props = defineProps<{
  position: 'front' | 'back',
  type: ClothingType,
  color: keyof typeof colors.clothing,
}>()

const clothingComponent = computed(() => ({
  'dress': Dress,
  'dress-shirt': DressShirt,
  'shirt': Shirt,
  'tank-top': TankTop,
  'v-neck': VNeck,
  'none': null,
  'naked': null,
}[props.type]));
</script>

<template>
  <component
    :is="clothingComponent"
    :color="color"
    :position="position"
  >
    <template #graphic>
      <slot name="graphic"/>
    </template>
  </component>
</template>
