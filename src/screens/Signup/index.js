import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';

import Block from '../../components/Base/Block';
import Typography from '../../components/Base/Typography';
import Input from '../../components/Base/Input';
import Button from '../../components/Base/Button';

import { colors } from '../../constants/theme';
import logo from '../../assets/logo.png';
import headingImage from '../../assets/heading-login.png';

const Signup = (props) => {
  const { navigation } = props;

  return (
    <Block relative flex color={colors.white}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block w100 relative style={styles.wrapperHeading}>
          <Image source={logo} resizeMode='contain' style={styles.logo} />

          <Image
            source={headingImage}
            resizeMode='cover'
            style={styles.imageTop}
          />

          <Block style={styles.wrapperTitle}>
            <Typography bold size={24}>
              Start
            </Typography>

            <Typography bold size={24} style={{ marginTop: -8 }}>
              from Scratch
            </Typography>
          </Block>
        </Block>

        <Block padding={{ horizontal: 20, top: 15 }}>
          <Typography color={colors.mediumBlack} size={16}>
            Create account to continue.
          </Typography>

          <Block style={styles.formWrapper}>
            <Input label='Email address' value='beta@softwareseni.com' />

            <Input label='Full name' value='Beta Priyoko' />

            <Input label='Password' value='password' secureTextEntry={true} />

            <Button
              // loading
              label='Create Account'
              style={styles.customButton}
            />
          </Block>

          <Block style={styles.registerAction} justify='center'>
            <Typography align='center' color={colors.gray}>
              Already have account?
            </Typography>

            <Button
              isButtonText
              label='Login Here'
              onPress={() => navigation.navigate('Signin')}
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  wrapperHeading: {
    height: 300,
  },
  logo: {
    width: 120,
    height: 70,
    position: 'absolute',
    zIndex: 5,
    top: 40,
    left: 20,
  },
  imageTop: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  wrapperTitle: {
    position: 'absolute',
    top: '40%',
    left: 20,
  },
  formWrapper: {
    marginTop: 30,
  },
  customButton: {
    marginTop: 7,
  },
  registerAction: {
    marginTop: 25,
    paddingBottom: 30,
  },
});

export default Signup;
