import type { AccessoryType } from "../../core/src/components/accessories/Accessory.vue"
import type { BodyType } from "../../core/src/components/bodies/Body.vue"
import type { ClothingGraphicType } from "../../core/src/components/clothingGraphics/ClothingGraphic.vue"
import type { ClothingType } from "../../core/src/components/clothings/Clothing.vue"
import type { EyebrowsType } from "../../core/src/components/eyebrows/Eyebrows.vue"
import type { EyeType } from "../../core/src/components/eyes/Eye.vue"
import type { FacialHairType } from "../../core/src/components/facialHairs/FacialHair.vue"
import type { HairType } from "../../core/src/components/hairs/Hair.vue"
import type { HatType } from "../../core/src/components/hats/Hat.vue"
import type { MouthType } from "../../core/src/components/mouths/Mouth.vue"
import type { colors } from "../../core/src/constants/theme"

export function randomizeOptions() {
  // Randomly pick skin tone
  const skin = ['light', 'dark', 'yellow', 'brown', 'red', 'black'][Math.floor(Math.random() * 6)] as keyof typeof colors.skin

  // Randomly pick body type
  const body = ['chest', 'breasts'][Math.floor(Math.random() * 2)] as BodyType

  // Randomly pick eye type
  const eye = ['normal-eyes', 'content-eyes', 'dizzy-eyes', 'happy-eyes', 'heart-eyes', 'left-twitch-eyes'][Math.floor(Math.random() * 6)] as EyeType

  // Randomly pick eyelashes
  const withLashes = Math.random() < 0.5 ? 'true' : 'false'

  // Randomly pick eyebrows
  const eyebrows = ['none', 'normal', 'serious', 'left-lowered', 'angry', 'concerned'][Math.floor(Math.random() * 6)] as EyebrowsType

  // Randomly pick mouth
  const mouth = ['grin', 'sad', 'serious', 'open', 'tongue'][Math.floor(Math.random() * 5)] as MouthType

  // Randomly pick lip color
  const lipColor = ['red', 'purple', 'pink', 'turquoise', 'green'][Math.floor(Math.random() * 5)] as keyof typeof colors.lipColors

  // Randomly pick facial hair
  const facialHair = ['none', 'stubble', 'medium-beard'][Math.floor(Math.random() * 3)] as FacialHairType 

  // Randomly pick hair style
  const hair = ['none', 'afro', 'balding', 'bob', 'bun', 'buzz', 'long', 'pixie', 'short'][Math.floor(Math.random() * 9)] as HairType 

  // Randomly pick hair color
  const hairColor = ['blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink', 'green', 'red', 'purple'][Math.floor(Math.random() * 10)] as keyof typeof colors.hair

  // Randomly pick clothing
  const clothing = ['none', 'dress', 'dress-shirt', 'shirt', 'tank-top', 'v-neck'][Math.floor(Math.random() * 6)] as ClothingType

  // Randomly pick clothing color
  const clothingColor = ['white', 'blue', 'black', 'green', 'red'][Math.floor(Math.random() * 5)] as keyof typeof colors.clothing

  // Randomly pick clothing graphic
  const clothingGraphic = ['none', 'vue', 'nuxt', 'redwood', 'react', 'gatsby', 'graphql'][Math.floor(Math.random() * 7)] as ClothingGraphicType

  // Randomly pick accessory
  const accessory = ['none', 'round-glasses', 'tiny-glasses', 'shades'][Math.floor(Math.random() * 4)] as AccessoryType

  // Randomly pick hat
  const hat = ['none', 'beanie', 'turban'][Math.floor(Math.random() * 3)] as HatType

  // Randomly pick hat color
  const hatColor = ['white', 'blue', 'black', 'green', 'red'][Math.floor(Math.random() * 5)] as keyof typeof colors.clothing

  // Randomly pick face mask
  const faceMask = Math.random() < 0.5 ? 'true' : 'false'

  // Randomly pick face mask color
  const faceMaskColor = ['white', 'blue', 'black', 'green', 'red'][Math.floor(Math.random() * 5)] as keyof typeof colors.clothing

  return {
    skin, body, eye, withLashes, eyebrows, mouth, lipColor, facialHair, hair, hairColor, clothing, clothingColor, clothingGraphic, accessory, hat, hatColor, faceMask, faceMaskColor
  }
}