import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';
import Modal from '../styleguide/Screens/Modal';
import Centered from '../styleguide/Screens/Centered';
import { TextInput } from 'react-native-gesture-handler';
import { CreateIdeaModalProps } from '../navigation/types/Modal';
import Text from '../styleguide/Text';
import PrimaryButton from '../styleguide/Buttons/PrimaryButton';
import Palette from '../styleguide/Palette';
function SuccessView() {
  return <Text variant="Title">That's a good one, I'll remember it for you.</Text>
};


function CreateIdea({navigation}: CreateIdeaModalProps) {
  const [uiState, setUiState] = useState(undefined);
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      navigation.navigate('MainTabs');
    });

    return () => {unsubscribe()};
  });

  let View;

  switch (uiState) {
    case 'success':
      View = <SuccessView />
      break;
    case 'error':
      View = <Text variant="Title">Sorry, didn't catch that.. Why don't you tell me again later?</Text>;
      break;
    default:
      View = <>
        <Text variant="Paragraph">Alright, What's your latest briliant idea?</Text>
        <TextInput 
          style={{
            color: Palette.white,
            fontSize: 18,
            borderBottomColor: Palette.white,
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginVertical: 12,
            width: 250,
            textAlignVertical: 'top',
          }}
          multiline={true}
          numberOfLines={8}
          maxLength={255}
          blurOnSubmit={true}
          returnKeyType={"done"}
          placeholderTextColor={Palette.placeholder}
        placeholder={'It\'s like Uber for six sided dice.'}/>
        <PrimaryButton label={"That's it."} onPress={() => setUiState('error')} />
        </>;
      break;
  }
  return (
    <Modal style={{backgroundColor: Palette.secondary}}>
      <Centered style={{paddingHorizontal: 24,}}>
      {View}
      </Centered>
    </Modal>
  )
}

export default CreateIdea;
