import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Palette from './Palette';

const styles = StyleSheet.create({
  default: {
  },
  title: {
    color: Palette.white,
    fontSize: 48,
    fontWeight: 'bold',
  },
  paragraph: {
    color: Palette.white,
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
  },
  button: {
    color: Palette.white,
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonSmall: {
    color: Palette.white,
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  }
})

export type TextVariant = 'Title' | 'Paragraph' | 'Button' | 'ButtonSmall';

interface Props {
  children?: any;
  style?: any;
  variant?: TextVariant;
  props?: any;
}

export default ({children, style, variant, ...props}: Props) => {
  let selectedStyle;

  switch (variant) {
    case 'Title':
      selectedStyle = styles.title;
      break;
    case 'Paragraph':
      selectedStyle = styles.paragraph;
      break;
    case 'Button':
      selectedStyle = styles.button;
      break;
    case 'ButtonSmall':
      selectedStyle = styles.buttonSmall;
      break;
    default:
      selectedStyle = styles.default;
  }

  const mergedStyle = StyleSheet.compose(selectedStyle, style);
  return <Text style={mergedStyle} {...props}>{children}</Text>;
};

