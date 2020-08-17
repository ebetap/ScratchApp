import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

import Block from '../Base/Block';
import Typography from '../Base/Typography';

import { colors } from '../../constants/theme';

const FeedCard = (props) => {
  const { item, onSave, ...allProps } = props;

  const { name, image, shortDesc, like, comments, isLike } = item || '';

  return (
    <Block style={styles.wrapperCard} {...allProps}>
      <Image source={image} resizeMode='cover' style={styles.cardImage} />

      <Block style={styles.cardDescription}>
        <Block row justify='space-between' align='center'>
          <Typography semiBold size={20}>
            {name}
          </Typography>

          <TouchableOpacity>
            <AntDesign
              name={isLike ? 'heart' : 'hearto'}
              color={isLike ? colors.pink : colors.mediumBlack}
              size={25}
            />
          </TouchableOpacity>
        </Block>

        <Typography size={16} color={colors.gray} style={{ marginTop: 9 }}>
          {shortDesc}
        </Typography>

        <Block margin={{ top: 20 }} row justify='space-between' align='center'>
          <Block row align='center'>
            <TouchableOpacity>
              <Typography color={colors.mediumBlack} size={16}>
                {like} Likes
              </Typography>
            </TouchableOpacity>

            <Block style={styles.dots}></Block>

            <TouchableOpacity>
              <Typography
                color={colors.mediumBlack}
                size={16}
                style={{ marginTop: 2 }}>
                {comments} Comments
              </Typography>
            </TouchableOpacity>
          </Block>

          <Block row align='center'>
            <TouchableOpacity
              style={styles.buttonSave}
              onPress={() => onSave()}>
              <Feather name='plus' color={colors.green} size={20} />

              <Typography
                bold
                size={16}
                color={colors.green}
                style={{ marginLeft: 3 }}>
                Save
              </Typography>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  wrapperCard: {
    marginTop: 8,
    borderRadius: 5,
    marginBottom: 10,
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
    height: 250,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardDescription: {
    paddingVertical: 10,
    paddingTop: 17,
    paddingHorizontal: 15,
    paddingBottom: 16,
  },
  dots: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: colors.gray,
    marginHorizontal: 10,
  },
  buttonSave: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});

FeedCard.defaultProps = {
  onSave: () => {},
};

export default FeedCard;
