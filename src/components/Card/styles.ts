import styled from 'styled-components';
import {Image, Text, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';

const Touchable = styled(TouchableOpacity)`
  height: 200px;
  margin-bottom: 10px;
`;

const Container = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
`;

const ImagePokemon = styled(Image)`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  justify-content: center;
`;

const Title = styled(Text)`
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  text-transform: capitalize;
`;

export {Touchable, Container, ImagePokemon, Title};
