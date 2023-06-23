import * as React from 'react';
import {Button} from 'react-native-paper';

const BackButton = () => (
  <Button  mode="contained-tonal" onPress={() => console.log('Pressed')}>
    Voltar
  </Button>
);

export default BackButton;
