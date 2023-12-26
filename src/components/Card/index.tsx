import {View} from 'react-native';
import {Container, ImagePokemon, Title, Touchable} from './styles';

type ItemProps = {
  title: string;
  image: string;
  onPress: () => void;
};

const CardPokemon = ({title, image, onPress}: ItemProps) => {
  return (
    <Touchable onPress={onPress}>
      <Container>
        <View>
          <ImagePokemon
            source={{
              uri: image,
            }}
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
