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
  margin-bottom: auto;
  /* width: 100%; */
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

const Item = styled(View)`
  justify-content: center;
  background-color: #fff;
  padding: 10px;
  margin: 5px;
`;

const ItemDetailsList = styled(View)`
  justify-content: space-around;
  flex-direction: row;
  padding: 10px;
  margin: 5px;
`;

export {Container, Content, Title, PokeDetails, Item, ItemDetailsList};
