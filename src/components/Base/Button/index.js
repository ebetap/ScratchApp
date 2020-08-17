import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Typography from '../Typography';
import { colors } from '../../../constants/theme';

const Button = (props) => {
  const {
    label,
    loading,
    isButtonText,
    size,
    outline,
    style,
    ...buttonProps
  } = props;

  const buttonStyles = [
    styles.buttonBase,
    isButtonText && styles.isButtonText,
    loading && styles.loading,
    style,
  ];

  return (
    <TouchableOpacity
      disabled={loading ? true : false}
      style={buttonStyles}
      {...buttonProps}>
      {loading ? (
        <ActivityIndicator size={26} color={colors.white} />
      ) : (
        <Typography
          size={size ? size : 16}
          color={isButtonText ? colors.green : colors.white}
          bold>
          {label}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 7,
    paddingVertical: 12,
  },
  isButtonText: {
    backgroundColor: colors.white,
    paddingVertical: 0,
    borderRadius: 0,
  },
  loading: {
    opacity: 0.7,
  },
});

Button.defaultProps = {
  label: 'Button',
  loading: false,
  isButtonText: false,
  outline: false,
};

Button.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  isButtonText: PropTypes.bool,
  outline: PropTypes.bool,
};

export default Button;
