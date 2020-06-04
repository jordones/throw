import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';

interface Props {
  children?: any;
  style?: any;
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    overflow: 'visible',
    marginTop: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white'
  },
  tab: {
    marginTop: - 10,
    marginBottom: 10,
    width: '20%',
    borderWidth: 2,
    borderColor: 'white',
    opacity: 0.5,
    borderRadius: 20,
    alignSelf: 'center',
  }
});

function Modal({children, style}: Props) {
  const mergedStyle = StyleSheet.compose(styles.container, style);

  return (
    <SafeAreaView style={mergedStyle}>
      <StatusBar barStyle="light-content" />
      <View style={styles.tab}></View>
      {children}
    </SafeAreaView>
  );
};

export default Modal;