<script setup lang="ts">
import { Beanhead } from 'beanheads-vue'
import { randomizeOptions } from '~/utils/random';

const options = ref(randomizeOptions())

const codes = [
  `npm install beanheads-vue`,
  `<script setup>
import { Beanhead } from 'beanheads-vue'
<\/script>

<template>
  <Beanhead />
<\/template>`
]
</script>
<template>
  <main class="px-4 md:px-0">
    <div class="flex flex-col items-center py-8 md:flex-row md:gap-6 mx-auto md:py-10 md:w-[50rem]">
      <div class="contents flex-grow md:flex md:flex-col md:justify-center">
        <h1 class="w-full text-2xl md:text-3xl font-bold mb-2">Beanheads Vue</h1>
        <p class="text-lg md:text-xl mb-4">Create billions of unique characters by mixing and matching colors, hairstyles, and clothing.</p>
        <div class="flex items-center gap-2 order-last mt-6 md:mt-0">
          <NuxtLink 
            to="/generator"
          >
            <UButton 
              color="primary" 
              variant="solid"
              size="lg"
            >Build Your Beanhead</UButton>
          </NuxtLink>

          <a 
            href="https://github.com/Heunsig/beanheads-vue"
            title="GitHub"
            target="_blank"
          >
            <UButton 
              icon="i-mdi:github"
              color="gray" 
              variant="ghost"
              size="lg"
            ></UButton>
          </a>
        </div>
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
                <Beanhead
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
    <div class="mx-auto py-8 md:w-[50rem] md:py-10">
      <h2 class="text-2xl font-bold mb-4">Getting Started</h2>
      <p class="mb-2">Install Beanheads Vue with your preferred package manager.</p>
      <div class="bg-gray-100 p-4 rounded-lg mb-4">
        <!-- Note: Nuxt is downgraded to 3.12.3 since Shiki has server compatibility issues -->
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
    <div class="mx-auto py-8 md:w-[50rem] md:py-10">
      <h2 class="text-2xl font-bold mb-4">Props</h2>
      <div class="overflow-x-auto">
        <table 
          class="table-fixed w-full min-w-[30rem] props-table"
        >
          <thead>
            <tr>
              <th class="w-[10rem] max-w-[10rem]">Name</th>
              <th>Type</th>
              <th class="w-[8rem] max-w-[8rem]">Default</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>
                <strong>mask</strong>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>skin</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"light"</code>
                  <code>"yellow"</code>
                  <code>"brown"</code>
                  <code>"dark"</code>
                  <code>"red"</code>
                  <code>"black"</code>
                </div>
              </td>
              <td>
                <code>"light"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>body</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"chest"</code>
                  <code>"breasts"</code>
                </div>
              </td>
              <td>
                <code>"chest"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>eye</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"content-eyes"</code>
                  <code>"dizzy-eyes"</code>
                  <code>"happy-eyes"</code>
                  <code>"heart-eyes"</code>
                  <code>"left-twitch-eyes"</code>
                  <code>"normal-eyes"</code>
                  <code>"simple-eyes"</code>
                  <code>"squint-eyes"</code>
                  <code>"wink"</code>
                </div>
              </td>
              <td>
                <code>"normal-eyes"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>with-lashes</strong>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>eyebrows</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"none"</code>
                  <code>"normal"</code>
                  <code>"serious"</code>
                  <code>"left-lowered"</code>
                  <code>"angry"</code>
                  <code>"concerned"</code>
                </div>
              </td>
              <td>
                <code>"none"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>mouth</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"grin"</code>
                  <code>"lips"</code>
                  <code>"sad"</code>
                  <code>"serious"</code>
                  <code>"open"</code>
                  <code>"tongue"</code>
                </div>
              </td>
              <td>
                <code>"grin"</code>
              </td>
            </tr>
            <tr  >
              <td>
                <strong>lip-color</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"red"</code>
                  <code>"purple"</code>
                  <code>"pink"</code>
                  <code>"turqoise"</code>
                  <code>"green"</code>
                </div>
              </td>
              <td>
                <code>"red"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>facial-hair</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"none"</code>
                  <code>"stubble"</code>
                  <code>"medium-beard"</code>
                </div>
              </td>
              <td>
                <code>"none"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>hair</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"none"</code>
                  <code>"afro"</code>
                  <code>"balding"</code>
                  <code>"bob"</code>
                  <code>"bun"</code>
                  <code>"buzz"</code>
                  <code>"long"</code>
                  <code>"pixie"</code>
                  <code>"short"</code>
                </div>
              </td>
              <td>
                <code>"none"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>hair-color</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"blonde"</code>
                  <code>"orange"</code>
                  <code>"black"</code>
                  <code>"white"</code>
                  <code>"brown"</code>
                  <code>"blue"</code>
                  <code>"pink"</code>
                </div>
              </td>
              <td>
                <code>"white"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>clothing</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"none"</code>
                  <code>"naked"</code>
                  <code>"dress"</code>
                  <code>"dress-shirt"</code>
                  <code>"shirt"</code>
                  <code>"tank-top"</code>
                  <code>"v-neck"</code>
                </div>
              </td>
              <td>
                <code>"none"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>clothing-color</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"white"</code>
                  <code>"blue"</code>
                  <code>"black"</code>
                  <code>"green"</code>
                  <code>"red"</code>
                </div>
              </td>
              <td>
                <code>"white"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>clothing-graphic</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"none"</code>
                  <code>"redwood"</code>
                  <code>"vue"</code>
                  <code>"react"</code>
                  <code>"gatsby"</code>
                  <code>"graphql"</code>
                </div>
              </td>
              <td>
                <code>"none"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>hat</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"none"</code>
                  <code>"beanie"</code>
                  <code>"turban"</code>
                </div>
              </td>
              <td>
                <code>"none"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>hat-color</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"white"</code>
                  <code>"blue"</code>
                  <code>"black"</code>
                  <code>"green"</code>
                  <code>"red"</code>
                </div>
              </td>
              <td>
                <code>"white"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>accessory</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"none"</code>
                  <code>"round-glasses"</code>
                  <code>"tiny-glasses"</code>
                  <code>"shades"</code>
                </div>
              </td>
              <td>
                <code>"none"</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>face-mask</strong>
              </td>
              <td>
                <code>boolean</code>
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td>
                <strong>face-mask-color</strong>
              </td>
              <td>
                <div class="flex flex-wrap gap-1">
                  <code>"white"</code>
                  <code>"blue"</code>
                  <code>"black"</code>
                  <code>"green"</code>
                  <code>"red"</code>
                </div>
              </td>
              <td>
                <code>"white"</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>
.shiki.github-light-default {
  background-color: transparent!important;
}

.props-table td {
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  padding: .5rem;
}

.props-table thead th {
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  padding: .5rem;
}

.props-table code {
  font-size: .75rem;
  color: #1c1c1c;
  background-color: #f0f0f0;
  padding: .125rem .25rem;
  border-radius: .25rem;
  white-space: nowrap;
}

.props-table strong {
  font-size: .875rem;
  font-weight: 500;
}
</style>
