import React from 'react';
import Text from '../Text';
import Palette from '../Palette';
import { TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => any;
  label: string;
}
export default ({onPress, label}: Props) => {
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: Palette.tertiary,
        marginTop: 10,
        paddingHorizontal: 32,
        paddingVertical: 18,
        borderRadius: 100,
      }}
      onPress={onPress}>
     <Text variant={"Button"}>{label}</Text>
    </TouchableOpacity>
  )
}