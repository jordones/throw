import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';

interface Props {
  children?: any;
  style?: any;
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

function Screen({children, style}: Props) {
  const mergedStyle = StyleSheet.compose(styles.container, style);

  return (
    <SafeAreaView style={mergedStyle}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

export default Screen;