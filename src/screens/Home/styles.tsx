import styled from 'styled-components';
import {View, ImageBackground, Text} from 'react-native';

const Container = styled(View)`
  flex: 1;
`;

const ImageHome = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
`;

const ImageText = styled(Text)`
  color: white;
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  background-color: #000000c0;
`;

export {Container, ImageHome, ImageText};
