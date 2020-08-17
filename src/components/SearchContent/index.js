import React, { useRef, useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Block from '../Base/Block';
import Typography from '../Base/Typography';

import { sizes, colors } from '../../constants/theme';

const deviceWidth = Dimensions.get('window').width;

const SearchContent = (props) => {
  const {
    leftTitle,
    buttonMore,
    listItem,
    listProfiles,
    listTags,
    withFilters,
    onFilterItemClick,
    navigation,
  } = props;

  let sliderRef = useRef(null);
  let sliderRefFilter = useRef(null);
  let sliderRefProfile = useRef(null);

  const [filterActive, setFilterActive] = useState(withFilters[0] || '');

  const renderItemList = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} style={styles.wrapperList}>
        <Image
          source={item.image}
          resizeMode='cover'
          style={styles.listItemImage}
        />

        <Typography bold size={18} height={22}>
          {item.name}
        </Typography>
      </TouchableOpacity>
    );
  };

  const renderItemFilter = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={[styles.wrapperItemFilter]}
        onPress={() => {
          onFilterItemClick(item, index);
          setFilterActive(item);
        }}>
        <Typography
          bold
          size={20}
          color={item === filterActive ? colors.black : colors.gray}>
          {item}
        </Typography>
      </TouchableOpacity>
    );
  };

  const renderItemProfile = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.wrapperProfile}
        onPress={() => navigation.navigate('OtherProfile')}>
        <Image
          source={item.coverImage}
          resizeMode='cover'
          style={styles.profileCoverImg}
        />

        <Image
          source={item.image}
          resizeMode='cover'
          style={styles.profileImage}
        />

        <Block style={styles.profileDesc}>
          <Typography align='center' semiBold size={18}>
            {item.name}
          </Typography>

          <Block row align='center' justify='space-around' margin={{ top: 10 }}>
            <Block>
              <Typography align='center' semiBold size={16}>
                {item.totalRecipes}
              </Typography>

              <Typography
                align='center'
                bold
                size={13}
                color={colors.mediumBlack}
                style={{ marginTop: -8 }}>
                recipes
              </Typography>
            </Block>

            <Block>
              <Typography align='center' semiBold size={16}>
                {item.totalFollowers}
              </Typography>

              <Typography
                align='center'
                bold
                size={13}
                color={colors.mediumBlack}
                style={{ marginTop: -8 }}>
                followers
              </Typography>
            </Block>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block relative margin={{ left: 20 }}>
      <Block row justify='space-between' align='center'>
        <Typography bold size={18}>
          {leftTitle}
        </Typography>

        {buttonMore ? (
          <TouchableOpacity>
            <Typography
              bold
              size={16}
              style={{ paddingRight: 20 }}
              color={colors.green}>
              {buttonMore}
            </Typography>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </Block>

      {withFilters.length > 0 && (
        <Block margin={{ top: 5 }}>
          <Carousel
            ref={(c) => (sliderRefFilter = c)}
            data={withFilters}
            renderItem={renderItemFilter}
            sliderWidth={deviceWidth}
            itemWidth={deviceWidth - sizes.base * 17.8}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            activeSlideAlignment='start'
          />
        </Block>
      )}

      {listItem.length > 0 && (
        <Block margin={{ top: 15 }}>
          <Carousel
            ref={(c) => (sliderRef = c)}
            data={listItem}
            renderItem={renderItemList}
            sliderWidth={deviceWidth}
            itemWidth={deviceWidth - sizes.base * 14.7}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            activeSlideAlignment='start'
          />
        </Block>
      )}

      {listProfiles.length > 0 && (
        <Block margin={{ top: 15 }}>
          <Carousel
            ref={(c) => (sliderRefProfile = c)}
            data={listProfiles}
            renderItem={renderItemProfile}
            sliderWidth={deviceWidth}
            itemWidth={deviceWidth - sizes.base * 10}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            activeSlideAlignment='start'
          />
        </Block>
      )}

      {listTags.length > 0 && (
        <Block margin={{ top: 8 }}>
          {listTags.map((tag, key) => (
            <TouchableOpacity key={key} style={styles.tagWrapper}>
              <Typography size={18}>{tag.name}</Typography>

              <Block row align='center' margin={{ top: 5 }}>
                <Typography size={15} color={colors.mediumBlack}>
                  {tag.totalFollowers} Followers
                </Typography>

                <Block style={styles.dots}></Block>

                <Typography size={15} color={colors.mediumBlack}>
                  {tag.totalRecipes} Recipes
                </Typography>
              </Block>
            </TouchableOpacity>
          ))}
        </Block>
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  wrapperList: {
    marginRight: 17,
  },
  listItemImage: {
    width: '100%',
    height: 155,
    marginBottom: 10,
  },
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  recipesWrapper: {
    paddingBottom: 40,
  },
  borderBottom: {
    position: 'absolute',
    bottom: 0,
    width: deviceWidth - 30,
    height: 1,
    backgroundColor: colors.gray,
  },
  wrapperItemFilter: {
    marginRight: 18,
  },
  dots: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: colors.gray,
    marginHorizontal: 10,
  },
  tagWrapper: {
    marginBottom: 13,
  },
  wrapperProfile: {
    position: 'relative',
    marginRight: 17,
    shadowColor: colors.lightGray,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 9.46,
    borderRadius: 7,
    elevation: 2,
    backgroundColor: colors.white,
    marginBottom: 2,
    marginLeft: 2,
  },
  profileCoverImg: {
    width: '100%',
    height: 150,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    opacity: 1,
  },
  profileImage: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 100,
    left: '27%',
    top: 90,
    borderWidth: 5,
    borderColor: colors.white,
  },
  profileDesc: {
    padding: 20,
    paddingBottom: 13,
    paddingTop: 45,
  },
});

SearchContent.defaultProps = {
  leftTitle: 'Title',
  buttonMore: false,
  listItem: [],
  withFilters: [],
  listProfiles: [],
  listTags: [],
  onFilterItemClick: () => {},
};

export default SearchContent;
