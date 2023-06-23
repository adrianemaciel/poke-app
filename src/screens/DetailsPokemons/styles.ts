import styled from 'styled-components';
import {Text, View} from 'react-native';

const Container = styled(View)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  height: 100%;
`;

const Content = styled(View)`
  width: 100%;
  justify-content: space-between;
`;

const Title = styled(Text)`
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  text-transform: capitalize;
`;

const PokeDetails = styled(View)`
  align-items: center;
  flex-direction: column;
`;

export {Container, Content, Title, PokeDetails};
