import {Container} from './styles';
import {FlatList} from 'react-native';
import CardPokemon from '../../components/Card';

const DATA = [
  {
    id: '01',
    title: 'Charmeleon',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  },
  {
    id: '02',
    title: 'Charizard',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  },
  {
    id: '03',
    title: 'Squirtle',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    id: '04',
    title: 'Wartortle',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
  },
  {
    id: '05',
    title: 'Charmander',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
];

const Pokemons = () => {
  return (
    <Container>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <CardPokemon title={item.title} image={item.image} />
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};
export default Pokemons;
