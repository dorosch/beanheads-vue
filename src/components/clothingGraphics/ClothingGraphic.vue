<script setup lang="ts">
import { computed } from 'vue';
import Redwood from './Redwood.vue';
import Vue from './Vue.vue';
import React from './React.vue';
import Gatsby from './Gatsby.vue';
import GraphQL from './GraphQL.vue';

const props = defineProps<{
  clothingGraphic: 'none' | 'redwood' | 'vue' | 'react' | 'gatsby' | 'graphql';
}>();

const clothingGraphicComponent = computed(() => {
  return {
    'none': null,
    'redwood': Redwood,
    'vue': Vue,
    'react': React,
    'gatsby': Gatsby,
    'graphql': GraphQL,
  }[props.clothingGraphic];
});
</script>

<template>
  <component v-if="clothingGraphicComponent" :is="clothingGraphicComponent" />
</template>
