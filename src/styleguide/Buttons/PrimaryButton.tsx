import React from 'react';
import Text, { TextVariant } from '../Text';
import Palette from '../Palette';
import { TouchableOpacity } from 'react-native';

type Size = 'Small'

interface Props {
  onPress: () => any;
  label: string;
  size?: Size
}
export default ({onPress, label, size}: Props) => {
  let textVariant: TextVariant = 'Button';
  switch (size) {
    case 'Small':
      textVariant = 'ButtonSmall';
      break;
    default:
      textVariant = 'Button';
      break;
  }

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
     <Text variant={textVariant}>{label}</Text>
    </TouchableOpacity>
  )
}