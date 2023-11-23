import {Image, View, ScrollView} from 'react-native';
import {
  Container,
  Content,
  Item,
  ItemDetailsList,
  PokeDetails,
  Title,
} from './styles';
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

type BaseExperience = number;

type Height = number;

type Moves = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: [
    {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    },
    {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    },
  ];
};

type Sprites = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type Types = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

const Details = ({route}: any) => {
  const [abilities, setAbilities] = useState<Array<Abilities>>([]);
  const [baseExperience, setBaseExperience] = useState<BaseExperience>();
  const [height, setHeight] = useState<Height>();
  const [moves, setMoves] = useState<Array<Moves>>([]);
  const [sprites, setSprites] = useState<Array<Sprites>>([]);
  const [stats, setStats] = useState<Array<Stats>>([]);
  const [types, setTypes] = useState<Array<Types>>([]);

  const {itemTitle, itemImage} = route.params;
  function PokemonsListDetails() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${itemTitle}`)
      .then(function (response) {
        setAbilities(response.data.abilities);
        setBaseExperience(response.data.base_experience);
        setHeight(response.data.height);
        setMoves(response.data.moves);
        setSprites(response.data.sprites);
        setStats(response.data.stats);
        setTypes(response.data.types);
      });
  }

  useEffect(() => {
    PokemonsListDetails();
  }, []);

  // console.log('data', JSON.stringify(stats, null, 2));

  return (
    <ScrollView>
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
          <View>
            <Title>Abilities</Title>
            <FlatList
              data={abilities}
              renderItem={({item}) => (
                <ItemDetailsList>
                  <Item>
                    <Text>{item.ability.name}</Text>
                  </Item>
                  <Item>
                    <Text>{item.slot}</Text>
                  </Item>
                </ItemDetailsList>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View>
            <Title>Base Experience</Title>
            <ItemDetailsList>
              <Text>{baseExperience}</Text>
            </ItemDetailsList>
          </View>
          <View>
            <Title>Height</Title>
            <ItemDetailsList>
              <Text>{height}</Text>
            </ItemDetailsList>
          </View>

          <View>
            <Title>Moves</Title>
            <FlatList
              contentContainerStyle={{justifyContent: 'space-between', flex: 1}}
              style={{padding: 10, flexDirection: 'row'}}
              data={moves}
              numColumns={2}
              renderItem={({item}) => (
                <Item>
                  <Text>{item.move.name}</Text>
                </Item>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View>
            <Title>Sprites</Title>
            <FlatList
              data={sprites}
              renderItem={({item}) => (
                <Item>
                  <Text>{item.back_default}</Text>
                </Item>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </Content>
      </Container>
    </ScrollView>
  );
};

export default Details;
