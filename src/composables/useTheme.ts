import { ref } from 'vue';
import { colors } from '@/constants/theme';

const themes = ref({
  skin: colors.skin.light
});

export function useTheme() {
  return themes.value
}