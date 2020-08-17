import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Platform } from 'react-native';

import Block from '../../components/Base/Block';
import Searchbar from '../../components/Searchbar';
import SearchContent from '../../components/SearchContent';

import { colors } from '../../constants/theme';
import {
  trendingRecipes,
  listRecipesWithFilter,
  listRecipesFilters,
  tags,
  profiles,
} from '../../constants/data-dummy';

const { OS } = Platform;

const Search = (props) => {
  const { navigation } = props;

  return (
    <SafeAreaView flex={1}>
      <Block
        flex
        relative
        color={colors.white}
        padding={{ top: OS === 'android' ? 50 : 25 }}>
        <Searchbar />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Block margin={{ top: 20 }}>
            <SearchContent
              leftTitle='Trending Recipes'
              listItem={trendingRecipes}
            />
          </Block>

          <Block
            margin={{ horizontal: 20, top: 20 }}
            style={styles.divider}></Block>

          <Block margin={{ top: 10 }}>
            <SearchContent
              withFilters={listRecipesFilters}
              leftTitle='What can i make with..'
              listItem={listRecipesWithFilter}
            />
          </Block>

          <Block
            margin={{ horizontal: 20, top: 20 }}
            style={styles.divider}></Block>

          <Block margin={{ top: 10 }}>
            <SearchContent
              leftTitle='Recipes'
              listItem={trendingRecipes}
              buttonMore='Show all (200+)'
            />
          </Block>

          <Block
            margin={{ horizontal: 20, top: 20 }}
            style={styles.divider}></Block>

          <Block margin={{ top: 10 }} padding={{ bottom: 20 }}>
            <SearchContent
              leftTitle='Profiles'
              listProfiles={profiles}
              buttonMore='Show all (42+)'
              navigation={navigation}
            />
          </Block>

          <Block
            margin={{ horizontal: 20, top: 20 }}
            style={styles.divider}></Block>

          <Block margin={{ top: 15 }} padding={{ bottom: 20 }}>
            <SearchContent
              leftTitle='Tags'
              listTags={tags}
              buttonMore='Show all (200+)'
            />
          </Block>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
});

export default Search;
