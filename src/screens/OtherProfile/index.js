import React from 'react';
import { StyleSheet } from 'react-native';

import Block from '../../components/Base/Block';
import Typography from '../../components/Base/Typography';

import { colors } from '../../constants/theme';

const OtherProfile = (props) => {
  return (
    <Block flex color={colors.white} justify='center' align='center'>
      <Typography>Other Profile!</Typography>
    </Block>
  );
};

const styles = StyleSheet.create({});

export default OtherProfile;
