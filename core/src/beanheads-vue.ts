export { default as Beanhead } from './components/Avatar.vue'
export type { AccessoryType } from './components/accessories/Accessory.vue';
export type { BodyType } from './components/bodies/Body.vue';
export type { ClothingType } from './components/clothings/Clothing.vue';
export type { ClothingGraphicType } from './components/clothingGraphics/ClothingGraphic.vue';
export type { EyeType } from './components/eyes/Eye.vue';
export type { EyebrowsType } from './components/eyebrows/Eyebrows.vue';
export type { FacialHairType } from './components/facialHairs/FacialHair.vue';
export type { HairType } from './components/hairs/Hair.vue';
export type { HatType } from './components/hats/Hat.vue';
export type { MouthType } from './components/mouths/Mouth.vue';

import { colors } from '@/constants/theme';

type SkinColor = keyof typeof colors.skin;
type HairColor = keyof typeof colors.hair;
type ClothingColor = keyof typeof colors.clothing;
type HatColor = ClothingColor;
type FaceMaskColor = ClothingColor;
type LipColor = keyof typeof colors.lipColors;

export type { SkinColor, HairColor, ClothingColor, HatColor, FaceMaskColor, LipColor }

export { colors }
