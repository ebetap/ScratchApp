import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import Block from '../Block';
import Typography from '../Typography';

import { colors, fontFamily, sizes } from '../../../constants/theme';

const Input = (props) => {
  const { label, rightLabel, style, ...inputProps } = props;

  const inputStyles = [styles.baseInput, style];

  return (
    <Block relative w100>
      <Block row justify='space-between' align='center'>
        <Typography color={colors.gray} size={15}>
          {label}
        </Typography>

        {rightLabel ? (
          <TouchableOpacity>
            <Typography size={15} color={colors.mediumBlack}>
              {rightLabel}
            </Typography>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </Block>

      <TextInput autoCapitalize='none' style={inputStyles} {...inputProps} />
    </Block>
  );
};

const styles = StyleSheet.create({
  baseInput: {
    fontFamily: fontFamily.regular,
    color: colors.black,
    fontSize: 18,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    marginBottom: 20,
  },
});

Input.defaultProps = {
  label: 'Label',
  rightLabel: '',
};

Input.propTypes = {
  label: PropTypes.string,
  rightLabel: PropTypes.string,
};

export default Input;
