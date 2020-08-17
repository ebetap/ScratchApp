import React from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';

import Block from '../../components/Base/Block';
import Typography from '../../components/Base/Typography';
import Input from '../../components/Base/Input';
import Button from '../../components/Base/Button';

import { colors } from '../../constants/theme';
import logo from '../../assets/logo.png';
import headingImage from '../../assets/heading-login.png';

const Signin = (props) => {
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

          <Typography bold size={24} style={styles.title}>
            Welcome Back!
          </Typography>
        </Block>

        <Block padding={{ horizontal: 20, top: 15 }}>
          <Typography color={colors.mediumBlack} size={16}>
            Please login to continue.
          </Typography>

          <Block style={styles.formWrapper}>
            <Input label='Email address' value='beta@softwareseni.com' />

            <Input
              label='Password'
              rightLabel='Forgot password?'
              value='password'
              secureTextEntry={true}
            />

            <Button
              label='Login'
              // loading
              style={styles.customButton}
              onPress={() => navigation.navigate('Home')}
            />
          </Block>

          <Block style={styles.registerAction} justify='center'>
            <Typography align='center' color={colors.gray}>
              New to scratch?
            </Typography>

            <Button
              isButtonText
              label='Create Account Here'
              onPress={() => navigation.navigate('Signup')}
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
  title: {
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
  },
});

export default Signin;
