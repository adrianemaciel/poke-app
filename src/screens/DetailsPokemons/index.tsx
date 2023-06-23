import {Image, View} from 'react-native';
import {Container, Content, PokeDetails, Title} from './styles';
import BackButton from '../../components/Button';

const Details = ({route}: any) => {
  const {itemTitle, itemImage} = route.params;
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
      </Content>
      <BackButton />
    </Container>
  );
};

export default Details;
