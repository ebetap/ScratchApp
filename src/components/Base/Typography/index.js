import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { colors, fonts, sizes, fontFamily } from '../../../constants/theme';

const Typography = (props) => {
  const {
    h1,
    h2,
    h3,
    header,
    title,
    body,
    caption,
    semiBold,
    bold,
    light,
    underline,
    italic,
    color,
    primary,
    secondary,
    info,
    success,
    danger,
    black,
    black2,
    black3,
    gray,
    gray2,
    gray3,
    white,
    size,
    align,
    height,
    spacing,
    capitalize,
    dropShadow,
    style,
    children,
    ...textProps
  } = props;

  const textStyles = [
    styles.text,
    size && { fontSize: size },
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    header && styles.header,
    title && styles.title,
    body && styles.body,
    caption && styles.caption,
    semiBold && styles.semiBold,
    bold && styles.bold,
    light && styles.light,
    underline && styles.underline,
    italic && styles.italic,
    color && styles[color],
    color && !styles[color] && { color },
    align && { textAlign: align },
    height && { lineHeight: height },
    spacing && { letterSpacing: spacing },
    capitalize && styles.capitalize,
    dropShadow && styles.dropShadow,
    style,
  ];

  return (
    <Text style={textStyles} {...textProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontFamily: fontFamily.regular,
    marginBottom: 4,
    fontSize: 16,
  },
  // fonts
  h1: fonts.h1,
  h2: fonts.h2,
  h3: fonts.h3,
  header: fonts.header,
  title: fonts.title,
  body: fonts.body,
  caption: fonts.caption,
  // variations
  light: {
    fontWeight: '200',
    fontFamily: fontFamily.light,
  },
  semiBold: {
    fontFamily: fontFamily.semiBold,
  },
  bold: {
    fontFamily: fontFamily.bold,
  },
  underline: { textDecorationLine: 'underline' },
  italic: { fontStyle: 'italic' },
  capitalize: { textTransform: 'capitalize' },
  dropShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});

Typography.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  header: PropTypes.bool,
  title: PropTypes.bool,
  body: PropTypes.bool,
  caption: PropTypes.bool,
  semiBold: PropTypes.bool,
  bold: PropTypes.bool,
  light: PropTypes.bool,
  underline: PropTypes.bool,
  italic: PropTypes.bool,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  height: PropTypes.number,
  spacing: PropTypes.number,
  capitalize: PropTypes.bool,
  dropShadow: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Typography.defaultProps = {
  children: '',
  size: sizes.font,
  h1: false,
  h2: false,
  h3: false,
  header: false,
  title: false,
  body: false,
  caption: false,
  semiBold: false,
  bold: false,
  light: false,
  underline: false,
  italic: false,
  color: false,
  align: 'left',
  height: 0,
  spacing: 0,
  capitalize: false,
  dropShadow: false,
  style: {},
};

export default Typography;
