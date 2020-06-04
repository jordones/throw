import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View, SafeAreaView, StyleSheet} from 'react-native';
import Screen from '../styleguide/Screens/Screen';
import Palette from '../styleguide/Palette';

const Tab = createBottomTabNavigator();

function IdeasScreen() {
  return <Screen>
    <Text>IdeaScreen</Text>
  </Screen>;
}

function ResultsScreen() {
  return <Screen>
    <Text>IdeaScreen</Text>
  </Screen>;
}

function AddIdea({navigation}) {
  return navigation.navigate('CreateIdeaModal');
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    // make this bg colour the same as the main bg
    <SafeAreaView style={{ backgroundColor: Palette.background, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
              backgroundColor: isFocused ? Palette.primary : Palette.secondary,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: Palette.black,
              shadowOffset: {
                height: 2,
                width: 0,
              },
              shadowRadius: 2,
              shadowOpacity: 0.2,
              borderWidth: 2,
              borderLeftWidth: isLeft ? 2 : 0,
              borderRightWidth: isLeft ? 0 : 2,
              borderRightColor: isLeft ? Palette.tertiary : Palette.black,
              borderLeftColor: isLeft ? Palette.black : Palette.tertiary,
            }}
          >
            <Text style={{ color: isFocused ? Palette.white : Palette.primary, fontSize: 16, margin: 12 }}>
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
        shadowColor: Palette.black,
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        backgroundColor: Palette.tertiary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text>+</Text>
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
