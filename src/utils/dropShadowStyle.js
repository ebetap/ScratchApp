import { colors } from '../constants/theme';

const dropShadowStyle = (elevation) => ({
  elevation,
  shadowColor: colors.mediumBlack,
  shadowOffset: { width: 0, height: 0.5 * elevation },
  shadowOpacity: 0.3,
  shadowRadius: 0.8 * elevation,
});

export default dropShadowStyle;
