import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { CardStyleInterpolators } from '@react-navigation/stack';

import { colors } from '../constants/theme';

import Block from '../components/Base/Block';
import Typography from '../components/Base/Typography';

//TabIcon
import IconHome from '../assets/icon-home.svg';
import IconHomeGreen from '../assets/icon-home-green.svg';
import IconAccount from '../assets/icon-account.svg';
import IconAccountGreen from '../assets/icon-account-green.svg';
import IconSearch from '../assets/icon-search.svg';
import IconSearchGreen from '../assets/icon-search-green.svg';
import IconLogout from '../assets/icon-logout.svg';

//Screens
import SearchScreen from '../screens/Search';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import SignupScreen from '../screens/Signup';
import SigninScreen from '../screens/Signin';
import SettingScreen from '../screens/Settings';
import OtherProfile from '../screens/OtherProfile';
import EditProfile from '../screens/EditProfile';

const Stack = createStackNavigator();
const TabHome = createBottomTabNavigator();
const TabAuth = createBottomTabNavigator();

function LogoTitle(props) {
  const { navigation, route } = props;

  return (
    <Block
      row
      justify='space-between'
      align='center'
      padding={{ horizontal: 10 }}>
      <TouchableOpacity>
        <Image
          resizeMode='contain'
          style={{ width: 120, height: 70 }}
          source={require('../assets/logo.png')}
        />
      </TouchableOpacity>

      <Block row align='center'>
        <TouchableOpacity style={{ marginRight: 30 }}>
          <Image
            resizeMode='contain'
            style={{ width: 21, height: 21 }}
            source={require('../assets/icon-notif.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            resizeMode='contain'
            style={{ width: 21, height: 21 }}
            source={require('../assets/icon-message.png')}
          />
        </TouchableOpacity>
      </Block>
    </Block>
  );
}

function LogoTitleProfile(props) {
  const { navigation, route } = props;

  return (
    <Block row justify='space-between' align='center'>
      <Typography size={25} bold>
        My Kitchen
      </Typography>

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Block row align='center'>
          <AntDesign name='setting' size={18} style={{ marginRight: 6 }} />

          <Typography bold size={17} color={colors.green}>
            Settings
          </Typography>
        </Block>
      </TouchableOpacity>
    </Block>
  );
}

function LogoTitleSettings(props) {
  const { navigation, route } = props;

  return (
    <Block w100 row justify='space-between' align='center'>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Block row align='center'>
          <FontAwesome name='angle-left' size={30} color={colors.mediumBlack} />

          <Typography
            size={15}
            color={colors.mediumBlack}
            style={{ marginBottom: 0, marginLeft: 10 }}>
            Back to..
          </Typography>
        </Block>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Block row align='center'>
          <IconLogout width={24} height={24} />

          <Typography
            bold
            size={17}
            color={colors.green}
            style={{ marginBottom: 0, marginLeft: 2 }}>
            Log Out
          </Typography>
        </Block>
      </TouchableOpacity>
    </Block>
  );
}

function LogoTitleEditProfile(props) {
  const { navigation, route } = props;

  return (
    <Block w100 row justify='space-between' align='center'>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Block row align='center'>
          <FontAwesome name='angle-left' size={30} color={colors.mediumBlack} />

          <Typography
            size={15}
            color={colors.mediumBlack}
            style={{ marginBottom: 0, marginLeft: 10 }}>
            Back to..
          </Typography>
        </Block>
      </TouchableOpacity>
    </Block>
  );
}

const HomeTabScreen = () => {
  return (
    <TabHome.Navigator
      initialRouteName='Home'
      tabBarOptions={{ showLabel: false, style: styles.tabStyle }}>
      <TabHome.Screen
        name='Search'
        component={SearchScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IconSearchGreen width={40} height={40} />
            ) : (
              <IconSearch width={40} height={40} />
            ),
        })}
      />

      <TabHome.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IconHomeGreen width={40} height={40} />
            ) : (
              <IconHome width={40} height={40} />
            ),
        })}
      />

      <TabHome.Screen
        name='Profile'
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IconAccountGreen width={40} height={40} />
            ) : (
              <IconAccount width={40} height={40} />
            ),
        })}
      />
    </TabHome.Navigator>
  );
};

const AuthTabScreen = () => {
  return (
    <TabAuth.Navigator initialRouteName={'Signin'}>
      <TabAuth.Screen
        name='Signin'
        options={{
          tabBarVisible: false,
        }}
        component={SigninScreen}
      />

      <TabAuth.Screen
        name='Signup'
        options={{
          tabBarVisible: false,
        }}
        component={SignupScreen}
      />
    </TabAuth.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth'>
        <Stack.Screen
          name='Home'
          component={HomeTabScreen}
          options={(props) => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: styles.headerStyle,
            headerLeft: false,
            headerShown: Number(props.route?.state?.index) === 0 ? false : true,
            headerTitle: () => {
              const { route } = props;
              const routeIndex = Number(route?.state?.index);

              if (!route.state || routeIndex === 1)
                return <LogoTitle {...props} />;

              if (routeIndex === 0) return false;

              if (routeIndex === 2) return <LogoTitleProfile {...props} />;
            },
          })}
        />

        <Stack.Screen
          name='Auth'
          component={AuthTabScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Settings'
          component={SettingScreen}
          options={(props) => ({
            headerStyle: styles.headerStyle,
            headerLeft: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerTitle: () => <LogoTitleSettings {...props} />,
          })}
        />

        <Stack.Screen
          name='OtherProfile'
          component={OtherProfile}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name='EditProfile'
          component={EditProfile}
          options={(props) => ({
            headerLeft: false,
            headerStyle: styles.headerStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerTitle: () => <LogoTitleEditProfile {...props} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    borderBottomColor: colors.white,
    height: 100,
  },
  tabStyle: {
    height: 70,
  },
});

export default MainStackNavigator;
