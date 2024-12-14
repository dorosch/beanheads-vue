<script setup lang="ts">
import { computed } from 'vue';
import Redwood from './Redwood.vue';
import Vue from './Vue.vue';
import React from './React.vue';
import Gatsby from './Gatsby.vue';
import GraphQL from './GraphQL.vue';
import Nuxt from './Nuxt.vue';

export type ClothingGraphicType = 'none' | 'redwood' | 'vue' | 'react' | 'gatsby' | 'graphql' | 'nuxt';

const props = defineProps<{
  type: ClothingGraphicType
}>();

const clothingGraphicComponent = computed(() => {
  return {
    'none': null,
    'redwood': Redwood,
    'vue': Vue,
    'react': React,
    'gatsby': Gatsby,
    'graphql': GraphQL,
    'nuxt': Nuxt,
  }[props.type];
});
</script>

<template>
  <component 
    v-if="clothingGraphicComponent !== null"
    :is="clothingGraphicComponent" 
  />
</template>
