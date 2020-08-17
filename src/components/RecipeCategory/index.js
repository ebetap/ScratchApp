import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import Block from '../Base/Block';
import Typography from '../Base/Typography';
import { colors } from '../../constants/theme';

const RecipeCategory = (props) => {
  const { item } = props;

  return (
    <TouchableOpacity relative w100 style={styles.wrapperCard}>
      <Image source={item.image} resizeMode='cover' style={styles.cardImage} />

      <Block padding={3}>
        <Typography align='center' size={17}>
          {item.category}
        </Typography>
      </Block>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapperCard: {
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: colors.white,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 9.46,
    elevation: 1,
  },
  cardImage: {
    height: 120,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default RecipeCategory;
