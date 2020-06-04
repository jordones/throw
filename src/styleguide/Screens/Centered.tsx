import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

function Centered({children}: any) {
  return (
    <View style={styles.centered}>
      {children}
    </View>
  )
};

export default Centered;