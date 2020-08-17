import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Block from '../../components/Base/Block';
import Typography from '../../components/Base/Typography';
import RecipeCategory from '../../components/RecipeCategory';

import IconEdit from '../../assets/icon-edit.svg';

import { colors } from '../../constants/theme';
import { myRecipes } from '../../constants/data-dummy';

const FirstRoute = (props) => {
  const { items } = props;

  return (
    <Block flex style={[styles.scene]} padding={{ horizontal: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block row wrap justify='space-between'>
          {items.map((item, key) => (
            <Block key={key} style={styles.itemRecipes}>
              <RecipeCategory item={item} />
            </Block>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
};

const SecondRoute = () => (
  <Block flex style={[styles.scene]} padding={{ horizontal: 20 }}>
    <Typography>Tab 2</Typography>
  </Block>
);

const ThirdRoute = () => (
  <Block flex style={[styles.scene]} padding={{ horizontal: 20 }}>
    <Typography>Tab 3</Typography>
  </Block>
);

const initialLayout = { width: Dimensions.get('window').width };

const Profile = (props) => {
  const { navigation } = props;

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Recipes' },
    { key: 'second', title: 'Saved' },
    { key: 'third', title: 'Following' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute items={myRecipes} />;
      case 'second':
        return <SecondRoute />;
      case 'third':
        return <ThirdRoute />;

      default:
        return null;
    }
  };

  const renderTabBar = (props) => {
    const { navigationState, jumpTo } = props;

    return (
      <Block
        row
        justify='space-between'
        color={colors.white}
        margin={{ bottom: 25 }}
        padding={{ horizontal: 20 }}
        w100>
        {navigationState.routes.map((route, idx) => (
          <TouchableOpacity
            key={route.key}
            style={[
              styles.tabBarItem,
              navigationState.index === idx && styles.tabActive,
            ]}
            onPress={() => jumpTo(route.key)}>
            {idx === 0 && (
              <Typography
                bold
                size={19}
                align='center'
                color={
                  navigationState.index === idx ? colors.black : colors.gray
                }>
                20
              </Typography>
            )}

            {idx === 1 && (
              <Typography
                bold
                size={19}
                align='center'
                color={
                  navigationState.index === idx ? colors.black : colors.gray
                }>
                75
              </Typography>
            )}

            {idx === 2 && (
              <Typography
                bold
                size={19}
                align='center'
                color={
                  navigationState.index === idx ? colors.black : colors.gray
                }>
                248
              </Typography>
            )}

            <Typography
              style={{ marginTop: -7 }}
              semiBold
              size={16}
              align='center'
              color={
                navigationState.index === idx ? colors.black : colors.gray
              }>
              {route.title}
            </Typography>
          </TouchableOpacity>
        ))}
      </Block>
    );
  };

  return (
    <Block flex color={colors.white}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block padding={{ horizontal: 20 }}>
          <Block
            padding={{ bottom: 20, top: 5 }}
            style={styles.topProfile}
            w100>
            <Block row>
              <Image
                source={require('../../assets/evan.jpeg')}
                resizeMode='cover'
                style={styles.imageProfile}
              />

              <Block style={styles.profileDetail}>
                <Typography bold size={20}>
                  Nick Evans
                </Typography>

                <Typography color={colors.mediumBlack} size={17}>
                  Potato Master
                </Typography>

                <Block row align='center' margin={{ top: 12 }}>
                  <Typography color={colors.mediumBlack} size={16}>
                    584 followers
                  </Typography>

                  <Block style={styles.dots}></Block>

                  <Typography color={colors.mediumBlack} size={16}>
                    23k likes
                  </Typography>
                </Block>
              </Block>

              <Block>
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditProfile')}>
                  <IconEdit width={28} height={28} />
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        </Block>

        <Block margin={{ top: 15 }}>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
          />
        </Block>
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  topProfile: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 15,
  },
  profileDetail: {
    width: '59%',
  },
  dots: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: colors.gray,
    marginHorizontal: 8,
  },
  scene: {
    flex: 1,
  },
  tabBarItem: {
    width: (Dimensions.get('window').width - 40) / 3,
    paddingBottom: 2,
    borderBottomWidth: 4,
    borderBottomColor: colors.white,
  },
  tabActive: {
    borderBottomColor: colors.green,
  },
  itemRecipes: {
    width: '47.2%',
    marginHorizontal: 2,
  },
});

export default Profile;
