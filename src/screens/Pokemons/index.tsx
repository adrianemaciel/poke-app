import {Container} from './styles';
import {FlatList} from 'react-native';
import CardPokemon from '../../components/Card';
import axios from 'axios';
import {useState, useEffect} from 'react';

type Props = {
  navigation: any;
};

type Item = {
  id: number | string;
  title: string;
  image: string;
  name?: string;
};

const Pokemons = ({navigation}: Props) => {
  const [data, setData] = useState([]);

  function PokemonsList() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8')
      .then(function (response) {
        const pokeList = response.data.results.map(
          (item: Item, index: number) => {
            return {
              id: index,
              title: item.name,
              image:
                'https://p.turbosquid.com/ts-thumb/Y2/L5MN4Z/6BnLhm5o/pokeball_lastrender_thumb/jpg/1310816066/600x600/fit_q87/1fc6afad8246c0aee27246d1b1f35d52b6d6dd6c/pokeball_lastrender_thumb.jpg',
            };
          },
        );
        setData(pokeList);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    PokemonsList();
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
        renderItem={({item}: {item: Item}) => (
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
