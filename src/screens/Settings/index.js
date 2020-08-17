import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Switch from 'react-native-switch-pro';
import { FontAwesome } from '@expo/vector-icons';

import Block from '../../components/Base/Block';
import Typography from '../../components/Base/Typography';

import { colors } from '../../constants/theme';

const Settings = (props) => {
  return (
    <ScrollView
      style={{ backgroundColor: colors.white }}
      showsVerticalScrollIndicator={false}>
      <Block flex color={colors.white}>
        <Block padding={{ horizontal: 20 }}>
          <Typography bold size={24} style={{ marginTop: -5 }}>
            Settings
          </Typography>

          <Block margin={{ top: 18 }}>
            <Typography color={colors.mediumBlack} size={16}>
              Push Notifications
            </Typography>
          </Block>

          <Block
            row
            justify='space-between'
            align='center'
            margin={{ top: 18 }}>
            <Typography size={18}>Notify me for followers</Typography>

            <Switch
              backgroundActive={colors.green}
              onSyncPress={(value) => {}}
            />
          </Block>

          <Block
            row
            justify='space-between'
            align='center'
            margin={{ top: 18 }}>
            <Typography size={18}>When someone send me a message</Typography>

            <Switch
              value={true}
              backgroundActive={colors.green}
              onSyncPress={(value) => {}}
            />
          </Block>

          <Block
            row
            justify='space-between'
            align='center'
            margin={{ top: 18 }}>
            <Typography size={18}>When someone do live cooking</Typography>

            <Switch
              value={true}
              backgroundActive={colors.green}
              onSyncPress={(value) => {}}
            />
          </Block>

          <Block margin={{ top: 33 }} style={styles.border}></Block>

          <Block margin={{ top: 22 }}>
            <Typography color={colors.mediumBlack} size={16}>
              Privacy Settings
            </Typography>
          </Block>

          <Block
            row
            justify='space-between'
            align='center'
            margin={{ top: 16 }}>
            <Typography size={18}>
              Followers can see my saved recipes
            </Typography>

            <Switch
              value={true}
              backgroundActive={colors.green}
              onSyncPress={(value) => {}}
            />
          </Block>

          <Block
            padding={{ vertical: 10, horizontal: 10 }}
            w100
            style={styles.additionalDetail}>
            <Typography color={colors.mediumBlack} height={22}>
              If disabled, you won’t be able to see recipes saved by other
              profiles. Leave this enabled to share your collected recipes to
              others.
            </Typography>

            <TouchableOpacity style={styles.why}>
              <Typography color={colors.green} bold>
                why this matter?
              </Typography>
            </TouchableOpacity>
          </Block>

          <Block
            row
            justify='space-between'
            align='center'
            margin={{ top: 18 }}>
            <Typography size={18}>
              Followers can see profiles I follow
            </Typography>

            <Switch
              value={true}
              backgroundActive={colors.green}
              onSyncPress={(value) => {}}
            />
          </Block>

          <Block margin={{ top: 33 }} style={styles.border}></Block>

          <TouchableOpacity>
            <Block
              row
              justify='space-between'
              align='center'
              margin={{ top: 26 }}>
              <Typography size={18}>Change password</Typography>

              <FontAwesome name='angle-right' size={30} color={colors.gray} />
            </Block>
          </TouchableOpacity>
        </Block>
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: colors.mediumGray,
  },
  additionalDetail: {
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    marginTop: 10,
    position: 'relative',
  },
  why: {
    position: 'absolute',
    bottom: 11,
    left: '55%',
  },
});

export default Settings;
