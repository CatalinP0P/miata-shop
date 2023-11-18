import { StyleSheet } from 'react-native';
import { colors } from '../../../../static/colors';

export const PrimaryStyle = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: colors.primary,
    color: colors.white,
  },

  button__text: {
    fontSize: 16,
    color: colors.white,
  },
});

export const TertiaryStyle = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    color: colors.primary,
    borderColor: colors.primary,
  },

  button__text: {
    fontSize: 16,
    color: colors.primary,
  },
});
