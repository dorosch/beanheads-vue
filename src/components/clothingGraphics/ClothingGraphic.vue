<script setup lang="ts">
import { computed } from 'vue';
import Redwood from './Redwood.vue';
import Vue from './Vue.vue';
import React from './React.vue';
import Gatsby from './Gatsby.vue';
import GraphQL from './GraphQL.vue';

export type ClothingGraphicType = 'redwood' | 'vue' | 'react' | 'gatsby' | 'graphql';

const props = defineProps<{
  type: ClothingGraphicType
}>();

const clothingGraphicComponent = computed(() => {
  return {
    'redwood': Redwood,
    'vue': Vue,
    'react': React,
    'gatsby': Gatsby,
    'graphql': GraphQL,
  }[props.type];
});
</script>

<template>
  <component :is="clothingGraphicComponent" />
</template>
