import React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';

import Block from '../../components/Base/Block';
import Typography from '../../components/Base/Typography';
import Button from '../../components/Base/Button';
import Input from '../../components/Base/Input';

import { colors } from '../../constants/theme';

const EditProfile = (props) => {
  return (
    <ScrollView
      style={{ backgroundColor: colors.white }}
      showsVerticalScrollIndicator={false}>
      <Block flex color={colors.white}>
        <Block padding={{ horizontal: 20 }}>
          <Typography bold size={24} style={{ marginTop: -5 }}>
            Edit Profile
          </Typography>
        </Block>

        <Block
          row
          align='center'
          justify='center'
          margin={{ top: 20, bottom: 8 }}>
          <Image
            source={require('../../assets/evan.jpeg')}
            resizeMode='cover'
            style={styles.imageProfile}
          />
        </Block>

        <Button size={18} label='Edit Profile Picture' isButtonText />

        <Block padding={{ horizontal: 20 }} margin={{ top: 30 }}>
          <Input label='Full Name' value='Nick Evans' />

          <Input label='Bio' value='Potato Master' />

          <Block margin={{ top: 15 }}>
            <Typography bold size={17}>
              Private Information
            </Typography>
          </Block>

          <Input label='Email' value='user@email.com' />

          <Input label='Phone' value='+1 234 567 89' />

          <Button label='Save Profile' style={{ marginTop: 15 }} />
        </Block>
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageProfile: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginRight: 15,
  },
});

export default EditProfile;
