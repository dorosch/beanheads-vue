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

export type BeanheadProperty = 'skin' | 'body' | 'eye' | 'withLashes' | 'eyebrows' | 'mouth' | 'lipColor' | 'facialHair' | 'hair' | 'hairColor' | 'clothing' | 'clothingColor' | 'clothingGraphic' | 'accessory' | 'hat' | 'hatColor' | 'faceMask' | 'faceMaskColor'

export function randomizeOptions(excludeProperties: BeanheadProperty[] = []) {
  const result: Record<string, any> = {}

  // Randomly pick skin tone
  if (!excludeProperties.includes('skin')) {
    const options = ['light', 'dark', 'yellow', 'brown', 'red', 'black']  
    result.skin = options[Math.floor(Math.random() * options.length)] as keyof typeof colors.skin
  }

  // Randomly pick body type
  if (!excludeProperties.includes('body')) {
    const options = ['chest', 'breasts']
    result.body = options[Math.floor(Math.random() * options.length)] as BodyType
  }

  // Randomly pick eye type
  if (!excludeProperties.includes('eye')) {
    const options = ['normal-eyes', 'content-eyes', 'dizzy-eyes', 'happy-eyes', 'heart-eyes', 'left-twitch-eyes']
    result.eye = options[Math.floor(Math.random() * options.length)] as EyeType
  }

  // Randomly pick eyelashes
  if (!excludeProperties.includes('withLashes')) {
    result.withLashes = Math.random() < 0.5 ? 'true' : 'false'
  }

  // Randomly pick eyebrows
  if (!excludeProperties.includes('eyebrows')) {
    const options = ['none', 'normal', 'serious', 'left-lowered', 'angry', 'concerned']
    result.eyebrows = options[Math.floor(Math.random() * options.length)] as EyebrowsType
  }

  // Randomly pick mouth
  if (!excludeProperties.includes('mouth')) {
    const options = ['grin', 'sad', 'serious', 'open', 'tongue']
    result.mouth = options[Math.floor(Math.random() * options.length)] as MouthType
  }

  // Randomly pick lip color
  if (!excludeProperties.includes('lipColor')) {
    const options = ['red', 'purple', 'pink', 'turquoise', 'green']
    result.lipColor = options[Math.floor(Math.random() * options.length)] as keyof typeof colors.lipColors
  }

  // Randomly pick facial hair
  if (!excludeProperties.includes('facialHair')) {
    const options = ['none', 'stubble', 'medium-beard']
    result.facialHair = options[Math.floor(Math.random() * options.length)] as FacialHairType 
  }

  // Randomly pick hair style
  if (!excludeProperties.includes('hair')) {
    const options = ['none', 'afro', 'balding', 'bob', 'bun', 'buzz', 'long', 'pixie', 'short']
    result.hair = options[Math.floor(Math.random() * options.length)] as HairType 
  }

  // Randomly pick hair color
  if (!excludeProperties.includes('hairColor')) {
    const options = ['blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink', 'green', 'red', 'purple']
    result.hairColor = options[Math.floor(Math.random() * options.length)] as keyof typeof colors.hair
  }

  // Randomly pick clothing
  if (!excludeProperties.includes('clothing')) {
    const options = ['none', 'dress', 'dress-shirt', 'shirt', 'tank-top', 'v-neck']
    result.clothing = options[Math.floor(Math.random() * options.length)] as ClothingType
  }

  // Randomly pick clothing color
  if (!excludeProperties.includes('clothingColor')) {
    const options = ['white', 'blue', 'black', 'green', 'red', 'pink']
    result.clothingColor = options[Math.floor(Math.random() * options.length)] as keyof typeof colors.clothing
  }

  // Randomly pick clothing graphic
  if (!excludeProperties.includes('clothingGraphic')) {
    const options = ['none', 'vue', 'nuxt', 'redwood', 'react', 'gatsby', 'graphql']
    result.clothingGraphic = options[Math.floor(Math.random() * options.length)] as ClothingGraphicType
  }

  // Randomly pick accessory
  if (!excludeProperties.includes('accessory')) {
    const options = ['none', 'round-glasses', 'tiny-glasses', 'shades']
    result.accessory = options[Math.floor(Math.random() * options.length)] as AccessoryType
  }

  // Randomly pick hat
  if (!excludeProperties.includes('hat')) {
    const options = ['none', 'beanie', 'turban']
    result.hat = options[Math.floor(Math.random() * options.length)] as HatType
  }

  // Randomly pick hat color
  if (!excludeProperties.includes('hatColor')) {
    const options = ['white', 'blue', 'black', 'green', 'red', 'pink']
    result.hatColor = options[Math.floor(Math.random() * options.length)] as keyof typeof colors.clothing
  }

  // Randomly pick face mask
  if (!excludeProperties.includes('faceMask')) {
    result.faceMask = Math.random() < 0.5 ? 'true' : 'false'
  }

  // Randomly pick face mask color
  if (!excludeProperties.includes('faceMaskColor')) {
    const options = ['white', 'blue', 'black', 'green', 'red', 'pink']
    result.faceMaskColor = options[Math.floor(Math.random() * options.length)] as keyof typeof colors.clothing
  }

  return result
}