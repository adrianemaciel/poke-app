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
  margin: 10px;
`;

const Title = styled(Text)`
  color: #fff;
  font-family: 'Roboto-Bold';
  font-size: 18px;
  text-align: center;
  margin-top: 10;
`;

const PokeDetails = styled(View)`
  align-items: center;
  flex-direction: column;
`;

const ItemDetailsList = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

const Item = styled(View)`
  flex: 1;
  align-items: center;
  margin-bottom: 10px;
`;

export {Container, Content, Title, PokeDetails, Item, ItemDetailsList};
