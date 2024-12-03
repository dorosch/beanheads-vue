<script setup lang="ts">
import { Avatar } from 'beanheads-vue'
</script>
<template>
  <div>
    <ClientOnly>
      <Avatar 
        width="300"
        accessory="round-glasses"
        body="breasts"
        hair="long"
        hair-color="blonde"
        clothing="dress-shirt"
        clothing-color="green"
      />
    </ClientOnly>
  </div>
</template>
