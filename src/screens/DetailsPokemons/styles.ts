import styled from 'styled-components';
import {Text, View} from 'react-native';

const Container = styled(View)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Content = styled(View)`
  height: 100%;
  margin-top: 10px;
`;

const Title = styled(Text)`
  align-self: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  text-transform: capitalize;
`;

const PokeDetails = styled(View)`
  align-items: center;
  flex-direction: column;
`;

const ItemDetailsList = styled(View)`
  flex-direction: row;
  justify-content: center;
  margin: 5px;
`;

const Item = styled(View)`
  padding: 10px;
  width: 48%;
  align-items: center;
`;

export {Container, Content, Title, PokeDetails, Item, ItemDetailsList};
