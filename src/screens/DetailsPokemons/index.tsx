import {Image} from 'react-native';
import {Container, Content, PokeDetails, Title} from './styles';
import BackButton from '../../components/Button';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Text} from 'react-native-paper';

type Abilities = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

const Details = ({route}: any) => {
  const [data, setData] = useState<Array<Abilities>>([]);

  const {itemTitle, itemImage} = route.params;
  function PokemonsListDetails() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${itemTitle}`)
      .then(function (response) {
        setData(response.data.abilities);
      });
  }

  useEffect(() => {
    PokemonsListDetails();
  }, []);

  console.log('data', JSON.stringify(data, null, 2));

  return (
    <Container>
      <Content>
        <PokeDetails>
          <Title>{itemTitle}</Title>
          <Image
            source={{
              uri: itemImage,
            }}
            style={{width: 140, height: 140}}
          />
        </PokeDetails>
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.ability.name}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </Content>
      <BackButton />
    </Container>
  );
};

export default Details;
