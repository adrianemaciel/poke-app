import {Text} from 'react-native';
import {Container} from './styles';

const Details = ({route}: any) => {
  const {item} = route.params;
  return (
    <Container>
      <Text>Detalhes de Pokemons</Text>
      <Text>{item}</Text>
    </Container>
  );
};

export default Details;
