import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { colors } from '../../constants/theme';

const MyRecipes = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
      }}>
      <Text>MyRecipes!</Text>
    </View>
  );
};

export default MyRecipes;
