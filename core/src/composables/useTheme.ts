import { reactive, readonly, toRef } from 'vue';
import { colors } from '@/constants/theme';

const theme = reactive({
  skin: colors.skin.light
});

export function useTheme() {
  function setSkin(skin: keyof typeof colors.skin) {
    theme.skin = colors.skin[skin]
  }

  return {
    skin: readonly(toRef(theme, 'skin')),
    setSkin
  }
}