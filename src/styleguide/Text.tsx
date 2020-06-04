import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  default: {
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 48,
    fontWeight: '500',
  }
})

type TextVariant = 'Title' | 'Paragraph';

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
    default:
      selectedStyle = styles.default;
  }

  const mergedStyle = StyleSheet.compose(selectedStyle, style);
  return <Text style={mergedStyle} {...props}>{children}</Text>;
};

