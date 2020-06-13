import React, { useState, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View, SafeAreaView, StyleSheet} from 'react-native';
import Screen from '../styleguide/Screens/Screen';
import Palette from '../styleguide/Palette';
import PrimaryButton from '../styleguide/Buttons/PrimaryButton';
import Text from '../styleguide/Text';
import Centered from '../styleguide/Screens/Centered';
import LottieView from "lottie-react-native";
import { Animated, Easing } from 'react-native';

const Tab = createBottomTabNavigator();

const ANIMATION_DURATION = 4775;
function IdeasScreen({navigation}) {
  const rollAnimation = useRef(new Animated.Value(0)).current;

  const playAnimation = () => {
    Animated.timing(rollAnimation, {
      toValue: 0.78,
      duration: ANIMATION_DURATION,
    }).start();
  };

  const handleNextProjectRequested = async () => {
    playAnimation();
    await new Promise((resolve) => {
      setTimeout(() => resolve(navigation.navigate('CreateIdeaModal')), ANIMATION_DURATION);
    });
  }

  return <Screen style={{backgroundColor: Palette.primary}}>
    <LottieView
      source={require('../../assets/lottie/3609-dice-animation.json')}
      progress={rollAnimation}
    />
    <View style={{
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 64,
      paddingHorizontal: 12}}>
    
    <PrimaryButton size={"Small"} label={"What's my next project?"} onPress={handleNextProjectRequested} />
 
    </View>
  </Screen>;
}

function ResultsScreen() {
  return <Screen style={{backgroundColor: Palette.primary, }}>
    <View style={{alignItems: 'flex-start', paddingHorizontal: 12}}>
      <Text variant={'Title'}>This screen needs some planning. In the future, You'll be able to upload what you've made.</Text>
    </View>
  </Screen>;
}

function AddIdea({navigation}) {
  return navigation.navigate('CreateIdeaModal');
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    // make this bg colour the same as the main bg
    <SafeAreaView style={{ backgroundColor: Palette.primary, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{flexDirection: 'row'}}>

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const isLeft = index % 2 === 0;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index.toString()}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              borderBottomLeftRadius: isLeft ? 8 : 0, 
              borderBottomRightRadius: isLeft ? 0 : 8,
              marginLeft: isLeft ? 8 : 0,
              marginRight: isLeft ? 0 : 8,
              marginBottom: 12,
              backgroundColor: isFocused ? Palette.secondary : Palette.primary,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: 'black',
              shadowOffset: {
                height: 2,
                width: 0,
              },
              shadowRadius: 5,
              shadowOpacity: 0.8,
              borderWidth: 0,
              borderLeftWidth: isLeft ? 2 : 0,
              borderRightWidth: isLeft ? 0 : 2,
              zIndex: isFocused ? 100 : 50,
              // borderRightColor: isLeft ? Palette.tertiary : 'black',
              // borderLeftColor: isLeft ? 'black' : Palette.tertiary,
              borderColor: 'transparent',
            }}
          >
            <Text style={{ color: isFocused ? Palette.white : Palette.placeholder, fontSize: 16, margin: 12 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateIdeaModal')}
        >
      <View style={{
        height: 70,
        width: 70,
        bottom: 25, 
        marginTop: -80,
        borderRadius: 35,
        borderWidth: 2,
        shadowColor: 'black',
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowRadius: 2,
        shadowOpacity: 0.5,
        backgroundColor: Palette.tertiary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text>🗒</Text>
      </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Ideas" component={IdeasScreen} />
      <Tab.Screen name="Results" component={ResultsScreen} />
    </Tab.Navigator>
  );
}

export default MainTabs;
