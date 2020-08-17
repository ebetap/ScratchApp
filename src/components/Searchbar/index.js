import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Block from '../Base/Block';

import IconSearch from '../../assets/icon-search.svg';
import IconFilter from '../../assets/icon-filter.svg';
import IconFilterGreen from '../../assets/icon-filter-green.svg';

import { fontFamily, colors } from '../../constants/theme';

const Searchbar = (props) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <Block relative style={styles.wrapperSearchBar} margin={{ horizontal: 20 }}>
      <IconSearch style={styles.iconSearch} width={30} height={30} />

      <TouchableOpacity
        style={styles.iconFilter}
        onPress={() => setShowFilter(!showFilter)}>
        {showFilter ? (
          <IconFilterGreen width={30} height={30} />
        ) : (
          <IconFilter width={30} height={30} />
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.searchInput}
        placeholder='Search recipe, people, or tag'
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  wrapperSearchBar: {
    paddingVertical: 10,
    borderRadius: 5,
    shadowColor: colors.lightGray,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 9.46,
    elevation: 7,
    backgroundColor: colors.white,
  },
  searchInput: {
    fontFamily: fontFamily.semiBold,
    color: colors.mediumBlack,
    fontSize: 16,
    paddingLeft: 42,
    width: '87%',
  },
  iconSearch: {
    position: 'absolute',
    left: 7,
    top: 9,
  },
  iconFilter: {
    position: 'absolute',
    right: 7,
    top: 9,
  },
});

export default Searchbar;
