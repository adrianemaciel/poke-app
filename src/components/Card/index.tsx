import {View} from 'react-native';
import {Container, ImagePokemon, Title, Touchable} from './styles';

type ItemProps = {
  title: string;
  image: string;
};

const CardPokemon = ({title, image}: ItemProps) => {
  return (
    <Touchable>
      <Container>
        <View>
          <ImagePokemon
            source={{
              uri: image,
            }}
            resizeMode="cover"
          />
        </View>
        <View>
          <Title>{title}</Title>
        </View>
      </Container>
    </Touchable>
  );
};

export default CardPokemon;
