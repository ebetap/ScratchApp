import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { sizes, colors } from '../../../constants/theme';
import dropShadowStyle from '../../../utils/dropShadowStyle';

const handlePaddingAndMargin = (type, value) => {
  const { horizontal, vertical, top, bottom, left, right } = value;

  if (typeof value === 'number') {
    return {
      [`${type}`]: value,
    };
  }

  return {
    [`${type}Horizontal`]: horizontal,
    [`${type}Vertical`]: vertical,
    [`${type}Top`]: top,
    [`${type}Bottom`]: bottom,
    [`${type}Left`]: left,
    [`${type}Right`]: right,
  };
};

const Block = (props) => {
  const {
    card,
    container,
    flex,
    row,
    rowReverse,
    wrap,
    column,
    columnReverse,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    align,
    justify,
    space,
    color,
    padding,
    margin,
    width,
    w100,
    maxWidth,
    elevation,
    radius,
    children,
    style,
    blockRef,
    relative,
    ...viewProps
  } = props;

  const blockStyles = [
    styles.block,
    flex && { flex: flex === true ? 1 : flex },
    card && styles.card,
    container && styles.container,
    row && styles.row,
    rowReverse && styles.rowReverse,
    wrap && styles.wrap,
    column && styles.column,
    columnReverse && styles.columnReverse,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    align && { alignItems: align },
    justify && { justifyContent: justify },
    space && { justifyContent: `space-${space}` },
    color && styles[color],
    color && !styles[color] && { backgroundColor: color },
    padding && handlePaddingAndMargin('padding', padding),
    margin && handlePaddingAndMargin('margin', margin),
    width && { width },
    maxWidth && { maxWidth },
    w100 && { width: '100%' },
    elevation && { ...dropShadowStyle(elevation) },
    radius && { borderRadius: radius },
    relative && { position: 'relative' },
    style,
  ];

  return (
    <View ref={blockRef} style={blockStyles} {...viewProps}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  card: {
    padding: sizes.base,
    borderRadius: sizes.radius,
    backgroundColor: colors.white,
    ...dropShadowStyle(sizes.elevation),
  },
  container: { paddingHorizontal: sizes.base },
  row: { flexDirection: 'row' },
  rowReverse: { flexDirection: 'row-reverse' },
  wrap: { flexWrap: 'wrap' },
  column: { flexDirection: 'column' },
  columnReverse: { flexDirection: 'column-reverse' },
  center: { alignItems: 'center' },
  right: { alignItems: 'flex-end' },
  left: { alignItems: 'flex-start' },
  middle: { justifyContent: 'center' },
  top: { justifyContent: 'flex-start' },
  bottom: { justifyContent: 'flex-end' },
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.secondary },
  black: { backgroundColor: colors.black },
  black1: { backgroundColor: colors.black1 },
  black2: { backgroundColor: colors.black2 },
  white: { backgroundColor: colors.white },
  gray: { backgroundColor: colors.gray },
  gray2: { backgroundColor: colors.gray2 },
  gray3: { backgroundColor: colors.gray3 },
});

Block.propTypes = {
  children: PropTypes.node,
  flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  card: PropTypes.bool,
  container: PropTypes.bool,
  row: PropTypes.bool,
  rowReverse: PropTypes.bool,
  wrap: PropTypes.bool,
  column: PropTypes.bool,
  columnReverse: PropTypes.bool,
  center: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  middle: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  align: PropTypes.oneOf([
    false,
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ]),
  justify: PropTypes.oneOf([
    false,
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  space: PropTypes.oneOf([false, 'between', 'around', 'evenly']),
  color: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      left: PropTypes.number,
      bottom: PropTypes.number,
      horizontal: PropTypes.number,
      vertical: PropTypes.number,
    }),
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      left: PropTypes.number,
      bottom: PropTypes.number,
      horizontal: PropTypes.number,
      vertical: PropTypes.number,
    }),
  ]),
  w100: PropTypes.bool,
  elevation: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  radius: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Block.defaultProps = {
  children: null,
  card: false,
  container: false,
  flex: 0,
  row: false,
  rowReverse: false,
  wrap: false,
  column: false,
  columnReverse: false,
  center: false,
  middle: false,
  left: false,
  right: false,
  top: false,
  bottom: false,
  align: false,
  justify: false,
  space: false,
  color: 'transparent',
  padding: 0,
  margin: 0,
  w100: false,
  elevation: false,
  radius: 0,
  style: {},
};

export default Block;
