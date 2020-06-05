import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

function Centered({children, style, props}: any) {
  const mergedStyle = StyleSheet.compose(styles.centered, style)
  return (
    <View style={mergedStyle} {...props}>
      {children}
    </View>
  )
};

export default Centered;