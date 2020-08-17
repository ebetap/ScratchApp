import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Block from '../../components/Base/Block';
import FeedCard from '../../components/FeedCard';

import { feeds } from '../../constants/data-dummy';
import { colors } from '../../constants/theme';

const Home = (props) => {
  const { navigation } = props;

  const [showSaveModal, setShowSaveModal] = useState(false);

  return (
    <Block color={colors.white} flex padding={{ horizontal: 23 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block row wrap padding={{ bottom: 12, top: 5 }}>
          {feeds.map((item) => (
            <Block w100 key={item.key} padding={{ horizontal: 3, top: 2 }}>
              <FeedCard item={item} />
            </Block>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({});

export default Home;
