import styled from 'styled-components';
import {Text, View} from 'react-native';

const Container = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const Title = styled(Text)`
  font-size: 32px;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
`;

export {Container, Title};
