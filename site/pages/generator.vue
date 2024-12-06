<script setup lang="ts">
import { Avatar } from 'beanheads-vue'
import { colors } from '../../core/src/constants/theme'
import { type AccessoryType } from '../../core/src/components/accessories/Accessory.vue';
import { type BodyType } from '../../core/src/components/bodies/Body.vue';
import { type ClothingType } from '../../core/src/components/clothings/Clothing.vue';
import { type ClothingGraphicType } from '../../core/src/components/clothingGraphics/ClothingGraphic.vue';
import { type EyeType } from '../../core/src/components/eyes/Eye.vue';
import { type EyebrowsType } from '../../core/src/components/eyebrows/Eyebrows.vue';
import { type FacialHairType } from '../../core/src/components/facialHairs/FacialHair.vue';
import { type HairType } from '../../core/src/components/hairs/Hair.vue';
import { type HatType } from '../../core/src/components/hats/Hat.vue';
import { type MouthType } from '../../core/src/components/mouths/Mouth.vue';

type AvatarOptions = {
  mask: string
  faceMask: string
  faceMaskColor: keyof typeof colors.clothing
  skin: keyof typeof colors.skin
  body: BodyType
  eye: EyeType
  withLashes: string
  eyebrows: EyebrowsType
  mouth: MouthType
  lipColor: keyof typeof colors.lipColors
  facialHair: FacialHairType
  hair: HairType
  hairColor: keyof typeof colors.hair
  clothing: ClothingType
  clothingColor: keyof typeof colors.clothing
  clothingGraphic: ClothingGraphicType
  hat: HatType
  hatColor: keyof typeof colors.clothing
  accessory: AccessoryType
}

const initialOptions: AvatarOptions = {
  // Layout
  mask: 'false',

  // Body
  skin: 'light',
  body: 'chest',

  // Face
  eye: 'normal-eyes',
  withLashes: 'false',
  eyebrows: 'none',
  mouth: 'grin',
  lipColor: 'red',
  facialHair: 'none',

  // Hair
  hair: 'none',
  hairColor: 'white',

  // Clothing
  clothing: 'none',
  clothingColor: 'white',
  clothingGraphic: 'none',

  // Accessories
  accessory: 'none',
  hat: 'none',
  hatColor: 'white',
  faceMask: 'false',
  faceMaskColor: 'white', 
}

const options = useUrlSearchParams('history', {
  initialValue: structuredClone(initialOptions)
})

function randomizeAvatar() {
  // Randomly pick skin tone
  options.skin = ['light', 'dark', 'yellow', 'brown', 'red', 'black'][Math.floor(Math.random() * 6)] as keyof typeof colors.skin

  // Randomly pick body type
  options.body = ['chest', 'breasts'][Math.floor(Math.random() * 2)] as BodyType

  // Randomly pick eye type
  options.eye = ['normal-eyes', 'content-eyes', 'dizzy-eyes', 'happy-eyes', 'heart-eyes', 'left-twitch-eyes'][Math.floor(Math.random() * 6)] as EyeType

  // Randomly pick eyelashes
  options.withLashes = Math.random() < 0.5 ? 'true' : 'false'

  // Randomly pick eyebrows
  options.eyebrows = ['none', 'normal', 'serious', 'left-lowered', 'angry', 'concerned'][Math.floor(Math.random() * 6)] as EyebrowsType

  // Randomly pick mouth
  options.mouth = ['grin', 'sad', 'serious', 'open', 'tongue'][Math.floor(Math.random() * 5)] as MouthType

  // Randomly pick lip color
  options.lipColor = ['red', 'purple', 'pink', 'turquoise', 'green'][Math.floor(Math.random() * 5)] as keyof typeof colors.lipColors

  // Randomly pick facial hair
  options.facialHair = ['none', 'stubble', 'medium-beard'][Math.floor(Math.random() * 3)] as FacialHairType 

  // Randomly pick hair style
  options.hair = ['none', 'afro', 'balding', 'bob', 'bun', 'buzz', 'long', 'pixie', 'short'][Math.floor(Math.random() * 9)] as HairType 

  // Randomly pick hair color
  options.hairColor = ['blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink'][Math.floor(Math.random() * 7)] as keyof typeof colors.hair

  // Randomly pick clothing
  options.clothing = ['none', 'dress', 'dress-shirt', 'shirt', 'tank-top', 'v-neck'][Math.floor(Math.random() * 6)] as ClothingType

  // Randomly pick clothing color
  options.clothingColor = ['white', 'blue', 'black', 'green', 'red'][Math.floor(Math.random() * 5)] as keyof typeof colors.clothing

  // Randomly pick clothing graphic
  options.clothingGraphic = ['none', 'redwood', 'vue', 'react', 'gatsby', 'graphql'][Math.floor(Math.random() * 6)] as ClothingGraphicType

  // Randomly pick accessory
  options.accessory = ['none', 'round-glasses', 'tiny-glasses', 'shades'][Math.floor(Math.random() * 4)] as AccessoryType

  // Randomly pick hat
  options.hat = ['none', 'beanie', 'turban'][Math.floor(Math.random() * 3)] as HatType

  // Randomly pick hat color
  options.hatColor = ['white', 'blue', 'black', 'green', 'red'][Math.floor(Math.random() * 5)] as keyof typeof colors.clothing

  // Randomly pick face mask
  options.faceMask = Math.random() < 0.5 ? 'true' : 'false'

  // Randomly pick face mask color
  options.faceMaskColor = ['white', 'blue', 'black', 'green', 'red'][Math.floor(Math.random() * 5)] as keyof typeof colors.clothing
}

function resetAvatar() {
  Object.assign(options, structuredClone(initialOptions))
}
</script>
<template>
  <main 
    class="flex flex-col gap-4 h-screen md:w-[50rem] mx-auto"
  >
    <div class="h-2/5 flex justify-center items-center">
      <Avatar 
        width="250"
        :mask="options.mask === 'true'"
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
    </div>
    <div class="h-3/5 p-5 rounded-t-2xl border-t border-gray-200 shadow-[0_0px_2px_0px_rgba(0,0,0,0.1)] overflow-auto">
      <div class="flex flex-col gap-6">
        <div class="flex gap-2">
          <!-- Randomize Avatar -->
          <UButton 
            type="button" 
            @click="randomizeAvatar"
          >
            Randomize
          </UButton>

          <!-- Reset Avatar -->
          <UButton 
            type="button" 
            variant="outline"
            @click="resetAvatar"
          >
            Reset
          </UButton>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Mask</h3>
          <div>
            <UToggle 
              :model-value="options.mask === 'true'"
              @update:model-value="options.mask = $event"
              size="xl"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Skin</h3>
          <div>
            <USelectMenu
              v-model="options.skin" 
              :options="[
                { label: 'Light', value: 'light' },
                { label: 'Dark', value: 'dark' },
                { label: 'Yellow', value: 'yellow' },
                { label: 'Brown', value: 'brown' },
                { label: 'Red', value: 'red' },
                { label: 'Black', value: 'black' },
              ]"
              value-attribute="value"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Body</h3>
          <div>
            <USelectMenu
              v-model="options.body" 
              :options="[
                { label: 'Chest', value: 'chest' },
                { label: 'Breasts', value: 'breasts' },
              ]"
              value-attribute="value"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Eye</h3>
          <div>
            <USelectMenu
              v-model="options.eye" 
              :options="[
                { label: 'Normal Eyes', value: 'normal-eyes' },
                { label: 'Content Eyes', value: 'content-eyes' },
                { label: 'Dizzy Eyes', value: 'dizzy-eyes' },
                { label: 'Happy Eyes', value: 'happy-eyes' },
                { label: 'Heart Eyes', value: 'heart-eyes' },
                { label: 'Left Twitch Eyes', value: 'left-twitch-eyes' },
              ]" 
              value-attribute="value"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">With Lashes</h3>
          <div>
            <UToggle 
              :model-value="options.withLashes === 'true'"
              @update:model-value="options.withLashes = $event ? 'true' : 'false'"
              size="xl"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Eyebrows</h3>
          <div>
            <USelectMenu
              v-model="options.eyebrows" 
              :options="[
                { label: 'None', value: 'none' },
                { label: 'Normal', value: 'normal' },
                { label: 'Serious', value: 'serious' },
                { label: 'Left Lowered', value: 'left-lowered' },
                { label: 'Angry', value: 'angry' },
                { label: 'Concerned', value: 'concerned' },
              ]" 
              value-attribute="value"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Mouth</h3>
          <div>
            <USelectMenu
              v-model="options.mouth" 
              :options="[
                { label: 'Grin', value: 'grin' },
                { label: 'Lips', value: 'lips' },
                { label: 'Sad', value: 'sad' },
                { label: 'Serious', value: 'serious' },
                { label: 'Open', value: 'open' },
                { label: 'Tongue', value: 'tongue' },
              ]" 
              value-attribute="value"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Lip Color</h3>
          <div>
            <USelectMenu
              v-model="options.lipColor" 
              :options="[
                { label: 'Red', value: 'red' },
                { label: 'Purple', value: 'purple' },
                { label: 'Pink', value: 'pink' },
                { label: 'Turquoise', value: 'turquoise' },
                { label: 'Green', value: 'green' },
              ]"
              value-attribute="value"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Facial Hair</h3>
          <div>
            <USelectMenu
              v-model="options.facialHair" 
              :options="[
                { label: 'None', value: 'none' },
                { label: 'Stubble', value: 'stubble' },
                { label: 'Medium Beard', value: 'medium-beard' },
              ]"
              value-attribute="value"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Hair</h3>
          <div>
            <USelectMenu
              v-model="options.hair" 
              :options="[
                { label: 'None', value: 'none' },
                { label: 'Afro', value: 'afro' },
                { label: 'Balding', value: 'balding' },
                { label: 'Bob', value: 'bob' },
                { label: 'Bun', value: 'bun' },
                { label: 'Buzz', value: 'buzz' },
                { label: 'Long', value: 'long' },
                { label: 'Pixie', value: 'pixie' },
                { label: 'Short', value: 'short' },
              ]"
              value-attribute="value"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Hair Color</h3>
          <div class="flex gap-2 flex-wrap">
            <label>
              <input type="radio" value="blonde" v-model="options.hairColor" class="hidden"/>
              <div class="w-8 h-8 rounded-full bg-[#FEDC58] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="orange" v-model="options.hairColor" class="hidden" />
              <div class="w-8 h-8 rounded-full bg-[#D96E27] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="black" v-model="options.hairColor" class="hidden" />
              <div class="w-8 h-8 rounded-full bg-[#592d3d] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="white" v-model="options.hairColor" class="hidden" />
              <div class="w-8 h-8 rounded-full bg-[#ffffff] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="brown" v-model="options.hairColor" class="hidden" />
              <div class="w-8 h-8 rounded-full bg-[#A56941] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="blue" v-model="options.hairColor" class="hidden" />
              <div class="w-8 h-8 rounded-full bg-[#85c5e5] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="pink" v-model="options.hairColor" class="hidden" />
              <div class="w-8 h-8 rounded-full bg-[#D69AC7] border border-gray-200"></div>
            </label>
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Clothing</h3>
          <div>
            <USelectMenu
              v-model="options.clothing" 
              :options="[
                { label: 'Naked', value: 'none' },
                { label: 'Dress', value: 'dress' },
                { label: 'Dress Shirt', value: 'dress-shirt' },
                { label: 'Shirt', value: 'shirt' },
                { label: 'Tank Top', value: 'tank-top' },
                { label: 'V-Neck', value: 'v-neck' },
              ]"
              value-attribute="value"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Clothing Color</h3>
          <div class="flex gap-2 flex-wrap">
            <label>
              <input type="radio" value="white" v-model="options.clothingColor" class="hidden"/>
              <div class="w-8 h-8 rounded-full bg-white border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="blue" v-model="options.clothingColor" class="hidden"/>
              <div class="w-8 h-8 rounded-full bg-[#85c5e5] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="black" v-model="options.clothingColor" class="hidden"/>
              <div class="w-8 h-8 rounded-full bg-[#633749] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="green" v-model="options.clothingColor" class="hidden"/>
              <div class="w-8 h-8 rounded-full bg-[#89d86f] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="red" v-model="options.clothingColor" class="hidden"/>
              <div class="w-8 h-8 rounded-full bg-[#d67070] border border-gray-200"></div>
            </label>
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Clothing Graphic</h3>
          <div>
            <USelectMenu
              v-model="options.clothingGraphic" 
              :options="[
                { label: 'None', value: 'none' },
                { label: 'Redwood', value: 'redwood' },
                { label: 'Vue', value: 'vue' },
                { label: 'React', value: 'react' },
                { label: 'Gatsby', value: 'gatsby' },
                { label: 'GraphQL', value: 'graphql' },
              ]"
              value-attribute="value"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Accessory</h3>
          <div>
            <USelectMenu
              v-model="options.accessory" 
              :options="[
                { label: 'None', value: 'none' },
                { label: 'Round Glasses', value: 'round-glasses' },
                { label: 'Tiny Glasses', value: 'tiny-glasses' },
                { label: 'Shades', value: 'shades' },
              ]"
              value-attribute="value"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Hat</h3>
          <div>
            <USelectMenu
              v-model="options.hat" 
              :options="[
                { label: 'None', value: 'none' },
                { label: 'Beanie', value: 'beanie' },
                { label: 'Turban', value: 'turban' },
              ]"
              value-attribute="value"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Hat Color</h3>
          <div class="flex gap-2 flex-wrap">
            <label>
              <input type="radio" value="white" v-model="options.hatColor" class="hidden"/>
              <div class="w-8 h-8 rounded-full bg-white border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="blue" v-model="options.hatColor" class="hidden"/>
              <div class="w-8 h-8 rounded-full bg-[#85c5e5] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="black" v-model="options.hatColor" class="hidden"/>
              <div class="w-8 h-8 rounded-full bg-[#633749] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="green" v-model="options.hatColor" class="hidden"/>
              <div class="w-8 h-8 rounded-full bg-[#89d86f] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="red" v-model="options.hatColor" class="hidden"/>
              <div class="w-8 h-8 rounded-full bg-[#d67070] border border-gray-200"></div>
            </label>
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Face Mask</h3>
          <div>
            <UToggle 
              :model-value="options.faceMask === 'true'"
              @update:model-value="options.faceMask = $event ? 'true' : 'false'"
              size="xl"
            />
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold mb-2">Face Mask Color</h3>
          <div class="flex gap-2 flex-wrap">
            <label>
              <input type="radio" value="white" v-model="options.faceMaskColor" class="hidden"/>
              <div class="w-8 h-8 rounded-full bg-white border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="blue" v-model="options.faceMaskColor" class="hidden" />
              <div class="w-8 h-8 rounded-full bg-[#85c5e5] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="black" v-model="options.faceMaskColor" class="hidden" />
              <div class="w-8 h-8 rounded-full bg-[#633749] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="green" v-model="options.faceMaskColor" class="hidden" />
              <div class="w-8 h-8 rounded-full bg-[#89d86f] border border-gray-200"></div>
            </label>
            <label>
              <input type="radio" value="red" v-model="options.faceMaskColor" class="hidden" />
              <div class="w-8 h-8 rounded-full bg-[#d67070] border border-gray-200"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
input[type="radio"]:checked + div {
  position: relative;
}

input[type="radio"]:checked + div::before {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: bold;
  color: var(--color);
  z-index: 1
}

input[type="radio"][value="white"]:checked + div::before {
  --color: #000;
}

input[type="radio"]:not([value="white"]):checked + div::before {
  --color: #fff;
}
</style>
