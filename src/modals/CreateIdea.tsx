import React, { useState, useEffect } from 'react';
import {Text, Button} from 'react-native';
import Modal from '../styleguide/Screens/Modal';
import Centered from '../styleguide/Screens/Centered';
import { TextInput } from 'react-native-gesture-handler';
import { CreateIdeaModalProps } from '../navigation/types/Modal';

function SuccessView() {
  return <Centered>
    <Text>That's a good one, I'll remember it for you.</Text>
  </Centered>
};


function CreateIdea({navigation}: CreateIdeaModalProps) {
  const [uiState, setUiState] = useState(undefined);
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      navigation.navigate('OnboardingStack');
    });

    return () => {unsubscribe()};
  });

  let View;

  switch (uiState) {
    case 'success':
      View = <SuccessView />
      break;
    case 'error':
      View = <Centered>
        <Text>Sorry, didn't catch that.. Why don't you tell me again later?</Text>
      </Centered>;
      break;
    default:
      View = <Centered>
        <Text>Alright, What's your latest briliant idea?</Text>
        <TextInput placeholder={'It\'s like Uber for six sided dice.'}/>
        <Button title={'That\'s it'} onPress={() => {
          setUiState('error')
          console.log('teste')
          // navigation.navigate('OnboardingStack');
        }}/>
      </Centered>;
      break;
  }
  return (
    <Modal>
      {View}
    </Modal>
  )
}

export default CreateIdea;
