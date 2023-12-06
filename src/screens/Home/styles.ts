import styled from 'styled-components';
import {View, Text} from 'react-native';

const Container = styled(View)`
  flex: 1;
`;

const SvgContainer = styled(View)`
  position: absolute;
  width: 236px;
  height: 307px;
  bottom: 0;
  left: 20%;
  right: 0;
`;

const Title = styled(Text)`
  color: #ffffff;
  font-family: 'Roboto-Bold';
  font-size: 42px;
  text-align: center;
  padding: 20px;
`;

export {Container, SvgContainer, Title};
