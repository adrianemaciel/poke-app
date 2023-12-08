import {Image, View, ScrollView} from 'react-native';
import {
  Container,
  Content,
  Item,
  ItemDetailsList,
  PokeDetails,
  Title,
} from './styles';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

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

type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

const Details = ({route}: any) => {
  const [abilities, setAbilities] = useState<Array<Abilities>>([]);
  const [baseExperience, setBaseExperience] = useState<BaseExperience>();
  const [height, setHeight] = useState<Height>();
  const [moves, setMoves] = useState<Array<Moves>>([]);
  const [stats, setStats] = useState<Array<Stats>>([]);

  const {itemTitle, itemImage} = route.params;
  function PokemonsListDetails() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${itemTitle}`)
      .then(function (response) {
        setAbilities(response.data.abilities);
        setBaseExperience(response.data.base_experience);
        setHeight(response.data.height);
        setMoves(response.data.moves.slice(0, 8));
        setStats(response.data.stats);
      });
  }

  useEffect(() => {
    PokemonsListDetails();
  }, []);

  return (
    <ScrollView>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{width: '100%', height: '100%'}}>
        <Container>
          <LinearGradient
            colors={['#22c1c3', '#fdbb2d']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={{flex: 1}}>
            <Content>
              <PokeDetails>
                <Title>{itemTitle}</Title>
                <Image
                  source={{
                    uri: itemImage,
                  }}
                  style={{
                    width: 140,
                    height: 140,
                    marginBottom: 20,
                    marginTop: 20,
                  }}
                />
              </PokeDetails>
              <Divider />
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
              <Divider />
              <View>
                <Title>Moves</Title>
                <FlatList
                  contentContainerStyle={{
                    justifyContent: 'space-between',
                    flex: 1,
                  }}
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
              <Divider />
              <View>
                <Title>Stats</Title>
                <FlatList
                  contentContainerStyle={{
                    justifyContent: 'space-between',
                    flex: 1,
                  }}
                  style={{padding: 10, flexDirection: 'row'}}
                  data={stats}
                  horizontal={false}
                  numColumns={2}
                  renderItem={({item}) => (
                    <Item>
                      <Text>{item.stat.name}</Text>
                    </Item>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              <Divider />
              <View>
                <Title>Base Experience</Title>
                <ItemDetailsList>
                  <Item>
                    <Text>{baseExperience}</Text>
                  </Item>
                </ItemDetailsList>
                <Title>Height</Title>
                <ItemDetailsList>
                  <Item>
                    <Text>{height}</Text>
                  </Item>
                </ItemDetailsList>
              </View>
            </Content>
          </LinearGradient>
        </Container>
      </ScrollView>
    </ScrollView>
  );
};

export default Details;
