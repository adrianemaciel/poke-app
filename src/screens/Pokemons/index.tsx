import {Container} from './styles';
import {FlatList} from 'react-native';
import CardPokemon from '../../components/Card';
import axios from 'axios';
import {useState, useEffect} from 'react';

type Props = {
  navigation: any;
};

interface Pokemon {
  id: number;
  title: string;
  image: string;
}

const Pokemons = ({navigation}: Props) => {
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8',
        );
        const pokeList = response.data.results.map(
          (item: any, index: number) => ({
            id: index,
            title: item.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          }),
        );
        setData(pokeList);
      } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
      }
    }

    fetchPokemons();
  }, []);

  const handlePress = (title: string, image: string) => {
    navigation.navigate('details', {
      itemTitle: title,
      itemImage: image,
    });
  };

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({item}: {item: Pokemon}) => (
          <CardPokemon
            onPress={() => handlePress(item.title, item.image)}
            title={item.title}
            image={item.image}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
};
export default Pokemons;
