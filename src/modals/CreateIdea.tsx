import React from 'react';
import {Text, Button} from 'react-native';
import Modal from '../styleguide/Screens/Modal';
import Centered from '../styleguide/Screens/Centered';
import { TextInput } from 'react-native-gesture-handler';


function CreateIdea({}) {
  return (
    <Modal>
      <Centered>
        <Text>Alright, What's your latest briliant idea?</Text>
        <TextInput placeholder={'It\'s like Uber for six sided dice.'}/>
        <Button title={'That\'s it'} onPress={() => {}}/>
      </Centered>
    </Modal>
  )
}

export default CreateIdea;
