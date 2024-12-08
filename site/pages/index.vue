<script setup lang="ts">
import { Avatar } from 'beanheads-vue'
import { randomizeOptions } from '~/utils/random';

const options = ref(randomizeOptions())

const codes = [
  `npm install beanheads-vue`,
  `<script setup>
import { Avatar } from 'beanheads-vue'
<\/script>

<template>
  <Avatar />
<\/template>`
]
</script>
<template>
  <main class="px-4 md:px-0">
    <div class="flex flex-col items-center py-8 md:flex-row md:gap-6 mx-auto md:py-16 md:w-[50rem]">
      <div class="contents flex-grow md:flex flex-col justify-center">
        <h1 class="w-full text-2xl md:text-3xl font-bold mb-2">Beanheads Vue</h1>
        <p class="text-lg md:text-xl mb-4">Create billions of unique characters by mixing and matching colors, hairstyles, and clothing.</p>
        <NuxtLink 
          to="/generator"
          class="order-last mt-6 md:mt-0"
        >
          <UButton 
            color="primary" 
            variant="solid"
          >Build Your Beanhead</UButton>
        </NuxtLink>
      </div>
      <UCard 
        class="w-[18rem] flex-shrink-0"
        :ui="{
          header: {
            base: 'pb-0',
            background: 'bg-[#d3ffcc]',
          }
        }"
      >
        <template #header>
          <div class="flex justify-center">
            <ClientOnly>
              <NuxtLink 
                :to="{
                  path: '/generator',
                  query: {
                    size: '300',
                    ...options,
                  },
                }"
                class="inline-flex w-[12.5rem] h-[12.5rem]"
              >
                <Avatar
                  :skin="options.skin"
                  :body="options.body"
                  :eye="options.eye"
                  :with-lashes="options.withLashes === 'true'"
                  :eyebrows="options.eyebrows"
                  :mouth="options.mouth"
                  :lip-color="options.lipColor"
                  :facial-hair="options.facialHair"
                  :hair="options.hair"
                  :hair-color="options.hairColor"
                  :clothing="options.clothing"
                  :clothing-color="options.clothingColor"
                  :clothing-graphic="options.clothingGraphic"
                  :hat="options.hat"
                  :hat-color="options.hatColor"
                  :accessory="options.accessory"
                  :face-mask="options.faceMask === 'true'"
                  :face-mask-color="options.faceMaskColor"
                />
              </NuxtLink>

              <template #fallback>
                <div class="h-[12.5rem]">
                  <svg class="inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10" fill="none"><defs><pattern id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path></pattern></defs><rect stroke="none" fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)" width="100%" height="100%"></rect></svg>
                </div>
              </template>
            </ClientOnly>
          </div>
        </template>

        <h2 class="text-lg font-semibold mb-2">Build Now</h2>
        <p class="text-base">Click the character to create your beanhead.</p>
      </UCard>
    </div>
    <div class="mx-auto py-8 md:w-[50rem] md:py-16">
      <h2 class="text-2xl font-bold mb-4">Getting Started</h2>
      <p class="mb-2">Install Beanheads Vue with your preferred package manager to get started.</p>
      <div class="bg-gray-100 p-4 rounded-lg mb-4">
        <Shiki 
          lang="bash"
          :code="codes[0]"
        />
      </div>
      <p class="mb-2">then, in your app:</p>
      <div class="bg-gray-100 p-4 rounded-lg overflow-auto">
        <Shiki 
          lang="vue" 
          :code="codes[1]"
        />
      </div>
    </div>
  </main>
</template>

<style>
.shiki.github-light-default {
  background-color: transparent!important;
}
</style>